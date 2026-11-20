import os

path = 'src/components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Presentation to imports if not present
if 'Presentation,' not in content:
    content = content.replace('  Scale,\n', '  Scale,\n  Presentation,\n')

# 2. Add 5-Slide Deck to main navbar
target_nav = """          <Link
            href="/admin/dashboard"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              pathname.startsWith('/admin') ? 'text-indigo-400 bg-indigo-950/40 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Growth War Room
          </Link>"""

replacement_nav = """          <Link
            href="/admin/dashboard"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              pathname.startsWith('/admin') ? 'text-indigo-400 bg-indigo-950/40 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Growth War Room
          </Link>
          <span className="text-slate-700">|</span>
          <Link
            href="/deck"
            className={`px-2.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              pathname === '/deck'
                ? 'text-amber-300 bg-amber-950/50 font-bold ring-1 ring-amber-500/40'
                : 'text-amber-400/90 hover:text-amber-300 hover:bg-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 text-amber-400" />
            <span>Growth Deck</span>
          </Link>"""

if target_nav in content:
    content = content.replace(target_nav, replacement_nav)
    print("Replaced main nav link successfully!")
else:
    print("Warning: target_nav not found!")

# 3. Add to Admin Sub-Nav
target_sub = """            <Link
              href="/admin/ai-decision-log"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/ai-decision-log'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              🧠 AI Decision Log
            </Link>"""

replacement_sub = """            <Link
              href="/admin/ai-decision-log"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/ai-decision-log'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              🧠 AI Decision Log
            </Link>
            <Link
              href="/deck"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium flex items-center gap-1 ${
                pathname === '/deck'
                  ? 'bg-amber-600 text-white font-bold shadow-sm shadow-amber-600/40'
                  : 'text-amber-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Presentation className="w-3 h-3 text-amber-400" />
              <span>✨ Executive Pitch Deck</span>
            </Link>"""

if target_sub in content:
    content = content.replace(target_sub, replacement_sub)
    print("Replaced admin sub-nav link successfully!")
else:
    print("Warning: target_sub not found!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Navbar patched cleanly!")
