'use client';

import { Service, ServiceStatus } from '@/types/status';
import { Download, FileText, Image } from 'lucide-react';
import { useState } from 'react';

interface ExportButtonProps {
  services: Service[];
  statuses: Record<string, 'online' | 'offline' | 'degraded' | 'checking'>;
}

export function ExportButton({ services, statuses }: ExportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const generateReport = (format: 'json' | 'csv' | 'txt') => {
    const timestamp = new Date().toISOString();
    const data = services.map(service => ({
      name: service.name,
      category: service.category,
      url: service.url,
      status: statuses[service.id]?.status || 'unknown',
      responseTime: statuses[service.id]?.responseTime,
      lastChecked: statuses[service.id]?.lastChecked?.toISOString(),
      error: statuses[service.id]?.error
    }));

    let content: string;
    let filename: string;
    let mimeType: string;

    switch (format) {
      case 'json':
        content = JSON.stringify({
          exportTime: timestamp,
          totalServices: services.length,
          onlineServices: data.filter(d => d.status === 'online').length,
          offlineServices: data.filter(d => d.status === 'offline').length,
          services: data
        }, null, 2);
        filename = `status-report-${new Date().toISOString().split('T')[0]}.json`;
        mimeType = 'application/json';
        break;

      case 'csv':
        const csvHeaders = 'Name,Category,URL,Status,Response Time (ms),Last Checked,Error\n';
        const csvRows = data.map(service => [
          `"${service.name}"`,
          `"${service.category}"`,
          `"${service.url}"`,
          `"${service.status}"`,
          service.responseTime || '',
          service.lastChecked || '',
          `"${service.error || ''}"`
        ].join(',')).join('\n');
        content = csvHeaders + csvRows;
        filename = `status-report-${new Date().toISOString().split('T')[0]}.csv`;
        mimeType = 'text/csv';
        break;

      case 'txt':
        const onlineCount = data.filter(d => d.status === 'online').length;
        const offlineCount = data.filter(d => d.status === 'offline').length;
        const degradedCount = data.filter(d => d.status === 'degraded').length;
        
        content = `STATUS REPORT
Generated: ${new Date().toLocaleString()}

SUMMARY
-------
Total Services: ${services.length}
Online: ${onlineCount}
Offline: ${offlineCount}
Degraded: ${degradedCount}

SERVICE DETAILS
---------------
${data.map(service => `
${service.name} (${service.category})
  Status: ${service.status.toUpperCase()}
  URL: ${service.url}
  Response Time: ${service.responseTime ? service.responseTime + 'ms' : 'N/A'}
  Last Checked: ${service.lastChecked ? new Date(service.lastChecked).toLocaleString() : 'N/A'}
  ${service.error ? `Error: ${service.error}` : ''}
`).join('\n')}`;
        filename = `status-report-${new Date().toISOString().split('T')[0]}.txt`;
        mimeType = 'text/plain';
        break;
    }

    // Create and download file
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setIsOpen(false);
  };

  const generateScreenshot = () => {
    // This would require html2canvas or similar library
    // For now, we'll just show a message
    alert('Screenshot feature would require additional dependencies. Consider using browser screenshot tools.');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Export</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20">
            <div className="p-2 space-y-1">
              <button
                onClick={() => generateReport('json')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>JSON Report</span>
              </button>
              
              <button
                onClick={() => generateReport('csv')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>CSV Export</span>
              </button>
              
              <button
                onClick={() => generateReport('txt')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Text Report</span>
              </button>
              
              <div className="border-t border-border my-1" />
              
              <button
                onClick={generateScreenshot}
                className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <Image className="w-4 h-4" />
                <span>Screenshot</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 