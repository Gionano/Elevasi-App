import sqlite3

def check():
    conn = sqlite3.connect('backend/app/elevasi.db')
    conn.row_factory = sqlite3.Row
    rows = conn.execute('SELECT * FROM users').fetchall()
    for r in rows:
        print(dict(r))

check()
