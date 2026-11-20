import os

path = 'src/app/admin/dashboard/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Presentation to imports
if 'Presentation,' not in content:
    content = content.replace('  PieChart,\n', '  PieChart,\n  Presentation,\n')

# 2. Add Pitch Deck button
target_btn = """        <div className="flex items-center space-x-3">
          <Link href="/admin/simulator">"""

replacement_btn = """        <div className="flex items-center space-x-3">
          <Link href="/deck">
            <Button size="sm" variant="secondary" className="border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-950/40">
              <Presentation className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              5-Slide Pitch Deck
            </Button>
          </Link>
          <Link href="/admin/simulator">"""

if target_btn in content:
    content = content.replace(target_btn, replacement_btn)
    print("Replaced War Room header actions successfully!")
else:
    print("Warning: target_btn not found!")

# 3. Also add a card link at the bottom quick links grid (lines 405-420)
target_bottom = """          <Link href="/admin/simulator" className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 block transition-all">"""

replacement_bottom = """          <Link href="/deck" className="p-3 rounded-lg bg-slate-900 border border-amber-500/40 hover:border-amber-400 block transition-all">
            <span className="text-xs font-mono font-bold text-amber-300 block">✨ Executive 5-Slide Deck</span>
            <span className="text-[11px] text-slate-400">Interactive Pitch & Speaker Notes</span>
          </Link>
          <Link href="/admin/simulator" className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 block transition-all">"""

if target_bottom in content:
    content = content.replace(target_bottom, replacement_bottom)
    print("Replaced bottom quick links successfully!")
else:
    print("Warning: target_bottom not found!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Admin dashboard patched cleanly!")
