# stock_collection.py - StockCollection class definition

# Standard modules in alphabetic order

import os
import os.path
import sys
import urllib2

# Application modules in alphabetic order

import stock_history


# Constants

STOCKS_DIR = 'stocks'

class StockCollection(object):
    """A container for a collection of stock histories.  Stock data can be
       downloaded from Yahoo Finance.  The collection can be loaded from disk
       and then used for analysis.
    """
    
    def __init__(self):
        self.stocks = {}

    def download_stock(self, symbol):
        """Download historical data for stock symbol."""

        # Create stocks directory if necessary
        if not os.path.exists(STOCKS_DIR):
            os.mkdir(STOCKS_DIR)

        # Download the historical stock data
        url = 'http://ichart.finance.yahoo.com/table.csv?s=' + symbol + '&c=1800'
        response = urllib2.urlopen(url)
        html = response.read()

        filename = STOCKS_DIR + '/' + symbol.upper() + '.csv'
        f = open(filename, 'w')
        f.write(html)
        f.close()

    def download(self, symbol):
        print 'Downloading %s.' % (symbol)
        self.download_stock(symbol)
    
    def download1(self, symbols):
        """Download historical data for each stock in the symbols list."""
        
        for symbol in symbols:
            print 'Downloading %s.' % (symbol)
            self.download_stock(symbol)

    def load_stock(self, filename):
        """Load a stock file from csv file into stock collection."""
        
        symbol = filename.split('.')[0]
        stock_path = STOCKS_DIR + '/' + filename
        history = stock_history.StockHistory(symbol, stock_path)
        self.stocks[symbol] = history        

    def load(self):
        """Load stocks from stocks directory."""
        
        if os.path.exists(STOCKS_DIR):
            stock_files = os.listdir(STOCKS_DIR)
            for stock_file in stock_files:
                self.load_stock(stock_file)

    def list(self):
        """Return the stocks found in the stocks directory."""
        
        return self.stocks.keys()

    def refresh(self):
        """Re-download the historical data from all stocks in the stocks dir."""

        self.download1(self.list())
 
    def max_day_increase(self, symbol):
        symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_day_increase()

    def max_day_percent_increase(self, symbol):
        symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_day_percent_increase()
			
    def max_day_decrease(self, symbol):
        symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_day_decrease()

    def max_day_percent_decrease(self, symbol):
    	symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_day_percent_decrease()

    def max_month_increase(self, symbol):
    	symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_month_increase()
            
    def max_year_increase(self, symbol):
    	symbol = symbol.upper()
        history = self.stocks[symbol]
        history.max_year_increase()

    def what_if(self, symbol, date_invested, amount_invested, convtype):
        symbol = symbol.upper()
        history = self.stocks[symbol]
        history.what_if(date_invested, amount_invested)

    def symb(self, sym):
       list_stocks =[]
       for sys in sym:
           history = self.stocks[sys]
           dict_stocks = history.last_day()
           list_stocks.append(dict_stocks)
       return list_stocks

    def top3(self):
        self.stocks.keys()
        sym = self.stocks.keys()
        list1 = self.symb(sym)
        dict2 = list1[-1]
        list2 = sorted(dict2.keys())
        biggest = list2[-1]
        biggest2 = list2[-2]
        biggest3 = list2[-3]
        print"Top1 %s: %f Top2 %s: %f Top3 %s: %f" %(dict2[biggest], biggest, dict2[biggest2], biggest2, dict2[biggest3], biggest3) 
        
        	

            
