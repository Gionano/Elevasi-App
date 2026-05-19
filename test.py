import sqlite3
import os

if os.path.exists('test.db'): os.remove('test.db')
conn = sqlite3.connect('test.db')
conn.execute('CREATE TABLE t (id INT)')
conn.commit()
with sqlite3.connect('test.db') as c2:
    c2.execute('INSERT INTO t VALUES (1)')
    
with sqlite3.connect('test.db') as c3:
    print("Results:", c3.execute('SELECT * FROM t').fetchall())
