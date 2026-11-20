path = 'src/app/admin/dashboard/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

target = """      {/* Quick Navigation Footer Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link href="/admin/simulator">"""

replacement = """      {/* Quick Navigation Footer Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Link href="/deck">
          <Card className="border-amber-500/40 bg-slate-900/90 hover:border-amber-400 transition-colors p-4">
            <span className="text-xs font-semibold text-amber-300 block flex items-center gap-1.5">
              <Presentation className="w-3.5 h-3.5 text-amber-400" />
              5-Slide Pitch Deck
            </span>
            <span className="text-[11px] text-slate-400">Executive Presentation Mode</span>
          </Card>
        </Link>
        <Link href="/admin/simulator">"""

if target in content:
    content = content.replace(target, replacement)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated footer quick links successfully!")
else:
    print("Target not found!")
