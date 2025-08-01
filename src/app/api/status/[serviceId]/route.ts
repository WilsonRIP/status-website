import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/lib/data/services';
import { StatusResponse } from '@/types/status';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ serviceId: string }> }
) {
  try {
    const { serviceId } = await params;
    const service = services.find(s => s.id === serviceId);
    
    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    const startTime = Date.now();
    
    try {
      // Check if it's a status page API or regular URL
      const checkUrl = service.checkUrl || service.url;
      
      const response = await fetch(checkUrl, {
        method: 'HEAD', // Use HEAD to minimize data transfer
        headers: {
          'User-Agent': 'Status-Checker/1.0',
        },
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });

      const responseTime = Date.now() - startTime;
      
      let status: 'online' | 'offline' | 'degraded' = 'online';
      
      // Check response status
      if (response.ok) {
        status = 'online';
      } else if (response.status >= 500) {
        status = 'offline';
      } else {
        status = 'degraded';
      }

      const result: StatusResponse = {
        success: response.ok,
        responseTime,
        status,
      };

      return NextResponse.json(result);
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      const result: StatusResponse = {
        success: false,
        responseTime,
        status: 'offline',
        error: error instanceof Error ? error.message : 'Unknown error',
      };

      return NextResponse.json(result);
    }
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 