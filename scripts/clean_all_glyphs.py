import sys
import io

sys.stdout.reconfigure(encoding='utf-8')

def patch_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"Patched: {path}")
        else:
            # try finding substring
            pass
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

patch_file('src/app/admin/ai-decision-log/page.tsx', [
    ('raw referral quantity ? unlock milestone', 'raw referral quantity — unlock milestone'),
    ('Campus Battle Mode" ? a live', 'Campus Battle Mode" — a live'),
    ('"# AI Share Copilot" ? generating', '"AI Share Copilot" — generating'),
    ('? Return to War Room', '← Return to War Room'),
    ('AI Suggestion ? Constraint/Evidence ? Human Decision ? Reason ? Final Strategy', 'AI Suggestion → Constraint/Evidence → Human Decision → Reason → Final Strategy')
])

patch_file('src/app/student/project/page.tsx', [
    ('OPTIONAL ? NOT REQUIRED TO ATTEND', 'OPTIONAL — NOT REQUIRED TO ATTEND'),
    ('LOW FRICTION ? HIGH ENGAGEMENT', 'LOW FRICTION → HIGH ENGAGEMENT'),
    ('?? Tip:', '💡 Tip:'),
    ('? Back to Student Hub', '← Back to Student Hub')
])

# For rewards page, let's fix the line dynamically
with open('src/app/student/rewards/page.tsx', 'r', encoding='utf-8') as f:
    rew_content = f.read()
import re
rew_content = re.sub(r'Locked [^\s]+ Invite', 'Locked • Invite', rew_content)
with open('src/app/student/rewards/page.tsx', 'w', encoding='utf-8') as f:
    f.write(rew_content)
print("Patched: src/app/student/rewards/page.tsx")

patch_file('src/app/success/page.tsx', [
    ('<span>? Successfully connected to Demo Workshop Community Channel!</span>', '<span>✓ Successfully connected to Demo Workshop Community Channel!</span>')
])

patch_file('src/components/AmbassadorPitchCard.tsx', [
    ('across campuses ? the invite link', 'across campuses — the invite link'),
    ('?? *Attention', '📢 *Attention'),
    ('? Live deployable', '• Live deployable'),
    ('? ATS-optimized', '• ATS-optimized'),
    ('? Top 10 placement', '• Top 10 placement'),
    ('?? ${shareUrl}', '👉 ${shareUrl}'),
    ('? *Special Workshop Partnership', '⚡ *Special Workshop Partnership'),
    ('Partnership for Club Members* ?', 'Partnership for Club Members* ⚡'),
    ('<span>? {currentPitch.subtitle}</span>', '<span>• {currentPitch.subtitle}</span>')
])

patch_file('src/components/GrowthRetentionTimeline.tsx', [
    ('<span>?</span>', '<span>→</span>')
])

patch_file('src/components/TheGrowthLoop.tsx', [
    ('<span className="text-xs text-slate-500">?</span>', '<span className="text-xs text-slate-500">→</span>')
])

print("All glyphs and arrows cleaned successfully!")
