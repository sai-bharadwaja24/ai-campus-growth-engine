path = 'src/app/admin/dashboard/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('ADMIN NEXT BEST ACTION ? PRIORITY: CRITICAL', 'ADMIN NEXT BEST ACTION — PRIORITY: CRITICAL')
content = content.replace('between 8:00 PM ? 11:00 PM in hostels', 'between 8:00 PM – 11:00 PM in hostels')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed stray ? in admin dashboard!")
