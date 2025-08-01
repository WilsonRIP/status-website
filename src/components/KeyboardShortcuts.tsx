'use client';

import { useEffect, useState } from 'react';
import { Keyboard, X } from 'lucide-react';

interface KeyboardShortcutsProps {
  onRefreshAllAction: () => void;
  onToggleSearchAction: () => void;
  onExportAction: () => void;
}

export function KeyboardShortcuts({ 
  onRefreshAllAction, 
  onToggleSearchAction, 
  onExportAction 
}: KeyboardShortcutsProps) {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const { key, ctrlKey, metaKey, shiftKey } = event;
      const cmdOrCtrl = ctrlKey || metaKey;

      switch (true) {
        // Ctrl/Cmd + R - Refresh all services
        case cmdOrCtrl && key === 'r':
          event.preventDefault();
          onRefreshAllAction();
          break;

        // Ctrl/Cmd + K or / - Focus search
        case (cmdOrCtrl && key === 'k') || key === '/':
          event.preventDefault();
          onToggleSearchAction();
          break;

        // Ctrl/Cmd + E - Export
        case cmdOrCtrl && key === 'e':
          event.preventDefault();
          onExportAction();
          break;

        // ? - Show help
        case key === '?' && !shiftKey:
          event.preventDefault();
          setShowHelp(true);
          break;

        // Escape - Close help
        case key === 'Escape':
          setShowHelp(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onRefreshAllAction, onToggleSearchAction, onExportAction]);

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setShowHelp(true)}
        className="fixed bottom-4 right-4 p-3 bg-card border border-border rounded-full shadow-lg hover:bg-accent transition-colors z-10"
        title="Keyboard Shortcuts (Press ? for help)"
      >
        <Keyboard className="w-5 h-5" />
      </button>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Keyboard Shortcuts</h2>
              <button
                onClick={() => setShowHelp(false)}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <ShortcutItem
                  keys={['Ctrl', 'R']}
                  description="Refresh all services"
                />
                <ShortcutItem
                  keys={['Ctrl', 'K']}
                  description="Focus search bar"
                />
                <ShortcutItem
                  keys={['/']}
                  description="Focus search bar"
                />
                <ShortcutItem
                  keys={['Ctrl', 'E']}
                  description="Open export menu"
                />
                <ShortcutItem
                  keys={['?']}
                  description="Show this help"
                />
                <ShortcutItem
                  keys={['Esc']}
                  description="Close modals"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  On Mac, use <kbd className="px-1 py-0.5 bg-accent rounded text-xs">Cmd</kbd> instead of <kbd className="px-1 py-0.5 bg-accent rounded text-xs">Ctrl</kbd>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ShortcutItem({ keys, description }: { keys: string[]; description: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground">{description}</span>
      <div className="flex items-center space-x-1">
        {keys.map((key, index) => (
          <div key={key} className="flex items-center">
            <kbd className="px-2 py-1 bg-accent text-xs rounded font-mono">
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="mx-1 text-muted-foreground">+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 