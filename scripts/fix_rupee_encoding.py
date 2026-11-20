import glob

files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    new_content = content
    # Common currency replacements where ? was substituted for ₹
    for num in ['2,000', '2000', '1,150', '1150', '2k', '850', '600', '300', '250', '200', '50k', '50', '45', '80', '4.00', '5.00', '3.36', '3.34', '2.79', '0.73', '0.88', '0']:
        new_content = new_content.replace('?' + num, '₹' + num)
    
    new_content = new_content.replace('?{', '₹{')
    new_content = new_content.replace('Hour 4 ? 8', 'Hour 4 – 8')
    new_content = new_content.replace('Hour 8 ? 12', 'Hour 8 – 12')
    new_content = new_content.replace('Hour 12 ? 24', 'Hour 12 – 24')
    new_content = new_content.replace('45?55 Minutes', '45–55 Minutes')
    new_content = new_content.replace('0?100', '0–100')
    new_content = new_content.replace('₹45 ? ₹80', '₹45 – ₹80')
    new_content = new_content.replace('? 80', '– ₹80')
    new_content = new_content.replace('DEMO / SIMULATION ? FISCAL TELEMETRY', 'DEMO / SIMULATION • FISCAL TELEMETRY')
    new_content = new_content.replace('Registration Confirmed ? Live Sprint', 'Registration Confirmed — Live Sprint')
    new_content = new_content.replace('\"AI Campus Growth Engine\" ? a', '\"AI Campus Growth Engine\" — a')
    new_content = new_content.replace('seats are capped at 500 across campuses ? the invite', 'seats are capped at 500 across campuses — the invite')
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        count += 1
        print(f'Updated: {f}')

print(f'Total files updated: {count}')
