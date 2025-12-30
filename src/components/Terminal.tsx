import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface CommandHistory {
  command: string;
  output?: string;
}

const routes = {
  'home': '/',
  '~': '/',
  'about': '/about',
  'projects': '/projects',
  'experience': '/experience',
};

const helpText = `Available commands:
  cd <page>     - Navigate to a page (home, about, projects, experience, contact)
  ls            - List available pages
  pwd           - Print current page
  clear         - Clear terminal
  help          - Show this help message`;

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    const page = Object.entries(routes).find(([_, path]) => path === location.pathname);
    return page ? page[0] : 'home';
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = '';

    switch (command) {
      case 'cd':
        if (args.length === 0) {
          navigate('/');
          output = '';
        } else {
          const destination = args[0].toLowerCase();
          if (destination in routes) {
            navigate(routes[destination as keyof typeof routes]);
            output = '';
          } else {
            output = `cd: ${args[0]}: No such page`;
          }
        }
        break;

      case 'ls':
        output = Object.keys(routes).filter(k => k !== '~').join('  ');
        break;

      case 'pwd':
        output = `/${getCurrentPage()}`;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'help':
        output = helpText;
        break;

      case '':
        break;

      default:
        output = `command not found: ${command}. Type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const commandHistory = history.map(h => h.command).filter(c => c);
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-[#252526] border border-[#3a3a3a] text-[#a3be8c] hover:border-[#a3be8c] transition-colors text-sm"
        aria-label="Toggle terminal"
      >
        {isOpen ? '[ close terminal ]' : '[ open terminal ]'}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 left-4 md:left-auto md:w-[600px] z-50 bg-[#1e1e1e] border border-[#3a3a3a] shadow-2xl">
          <div className="bg-[#252526] px-4 py-2 border-b border-[#3a3a3a] flex justify-between items-center">
            <span className="text-[#a3be8c] text-sm">terminal</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#808080] hover:text-[#d4d4d4] text-sm"
            >
              ✕
            </button>
          </div>

          <div
            ref={terminalRef}
            className="p-4 h-[300px] overflow-y-auto font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="text-[#808080] mb-4 text-xs">
              Type 'help' for available commands
            </div>

            {history.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex gap-2">
                  <span className="text-[#a3be8c]">$</span>
                  <span className="text-[#d4d4d4]">{item.command}</span>
                </div>
                {item.output && (
                  <div className="text-[#808080] whitespace-pre-wrap ml-4 mt-1 text-xs">
                    {item.output}
                  </div>
                )}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-[#a3be8c]">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[#d4d4d4] caret-[#a3be8c]"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
