#!/usr/bin/env python
import cgitb
cgitb.enable()

import cgi
import stocks
import stock_day
import stock_collection
import stock_history

"""
TODO:
use execjs.compile to compile javascript
we'll use matplotlib for building the visualizations.
We'll create html on the fly afterwards.
"""

html_form = """
<html>
<body bgcolor="#DEB887">
<header>
<h1><font face="helterskelter"> Stock Analysis: </font></h1>
<h2>Check a checkbox for utilizing the stock analysis.</h2>
</header>
<body>
<p>
<form action = 'StockAnalysis.py'>
<input type='radio' name='convtype' value='what_if' checked /> what_if
<br>
<input type='radio' name='convtype' value='max_day_increase' /> max_day_increase
<br>
<input type='radio' name='convtype' value='max_day_decrease' /> max_day_decrease
<br>
<input type='radio' name='convtype' value='max_day_percent_increase' /> max_day_percent_increase
<br>
<input type='radio' name='convtype' value='max_day_percent_decrease' /> max_day_percent_decrease
<br>
<input type='radio' name='convtype' value='max_month_increase' /> max_month_increase
<br>
<input type='radio' name='convtype' value='max_year_increase' /> max_year_increase
<br>
<input type='radio' name='convtype' value='top3' /> top3
<br>
<input type='radio' name='convtype' value='download' /> download
<br>
<input type='radio' name='convtype' value='refresh' /> refresh
<p>
Date Invested: <input type='text' name="date_invested" />
<p>
Amount Invested: <input type='text' name="amount_invested" />
<p>
Stock: <input type='text' name="symbol" />
<p>
<input type="submit"/>
</form>
</body>
</html>
"""




html_result_start = """
<html>
<body bgcolor="#DEB887">
<form action="p3.py">
<input type="submit" value="Try Again">
<h1><font face="helterskelter"> Stock Data: </font></h1>
</form>
"""

html_result_end = """
</body>
</html>
"""

# Helper functions

def print_content_type():
    print "Content-type: text/html"
    print

def print_form():
    print_content_type()
    print html_form
    

def print_result(symbol, convtype):
    print_content_type()
    print html_result_start
    stocks.print_table(symbol, convtype)
    print html_result_end
    
def print_what_if(symbol, date_invested, amount_invested, convtype):
	print_content_type()
	print html_result_start
	stocks.print_a(symbol, date_invested, amount_invested, convtype)
	print html_result_end

# Main program

form = cgi.FieldStorage()

extracted_convtype = form.getvalue('convtype', '')
extracted_day_invested = str(form.getvalue('date_invested',''))
extracted_amount_invested = float(form.getvalue('amount_invested', 0.0))
extracted_stock = str(form.getvalue('symbol', ''))


if extracted_convtype in ['max_day_increase', 'max_day_decrease', 'max_day_percent_increase', 'max_day_percent_decrease', 'max_month_increase', 'max_year_increase', 'download','refresh', 'top3']:
    print_result(extracted_stock, extracted_convtype)
elif extracted_convtype in ['what_if']:
	print_what_if(extracted_stock, extracted_day_invested, extracted_amount_invested, extracted_convtype)
else:
    print_form()

