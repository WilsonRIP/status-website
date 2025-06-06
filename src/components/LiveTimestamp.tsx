'use client';

import { useState, useEffect } from 'react';

export function LiveTimestamp() {
  const [timestamp, setTimestamp] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTimestamp = () => {
      setTimestamp(new Date().toLocaleString());
    };

    // Set initial timestamp
    updateTimestamp();

    // Update every second
    const interval = setInterval(updateTimestamp, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <span className="text-sm text-muted-foreground">Loading...</span>;
  }

  return (
    <span className="text-sm text-muted-foreground">
      Last updated: {timestamp}
    </span>
  );
} 