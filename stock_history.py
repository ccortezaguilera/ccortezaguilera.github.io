# stock_history.py - StockHistory class definition

# Application modules in alphabetic order

import sys
import stock_day
import stock_collection

dict1 ={}

class StockHistory(object):
    """A container for a list of historical stock day data.""" 
    
    def __init__(self, symbol, filename):
        self.symbol = symbol
        self.history = []
        self.month_history = {}
        self.date_history = {} 
        
        f = open(filename, 'r')
        stock_lines = f.readlines()

        stock_lines = stock_lines[1:]

        for line in stock_lines:
            line = line.strip()
            values = line.split(',')
            day = stock_day.StockDay(values[0], float(values[1]), float(values[2]),
                                    float(values[3]), float(values[4]), float(values[5]),
                                    float(values[6]))

            self.history.append(day)

    def max_day_increase(self):
        maxdiff = 0.0        
        maxday = None
    
        for day in self.history:
            diff = day.increase()
            if diff > maxdiff:
                maxdiff = diff
                maxday = day
        print "%s: %s open = %f close = %f diff = %f" % (self.symbol, maxday.date,
                                                         maxday.open, maxday.close,
                                                         maxdiff)
                                                         

    def max_day_decrease(self):
        maxdiff = 0.0
        maxday = None

        for day in self.history:
            diff = day.decrease()
            if diff > maxdiff:
                maxdiff = diff
                maxday = day
        print "%s: %s open = %f close = %f diff = %f" % (self.symbol, maxday.date,
                                                         maxday.open, maxday.close,
                                                         maxdiff)

    def max_day_percent_increase(self):
        maxdiff = 0.0
        maxday = None
		
        for day in self.history:
            diff = day.percent_increase()
            if diff > maxdiff:
                maxdiff = diff
                maxday = day
        print "%s: %s open = %f close = %f percent diff = %f" % (self.symbol, maxday.date,
                                                         maxday.open, maxday.close,
                                                         maxdiff)
                                                         
    def max_day_percent_decrease(self):
        maxdiff = 0.0
        maxday = None

        for day in self.history:
            diff = day.percent_decrease()
            if diff > maxdiff:
                maxdiff = diff
                maxday = day
        print "%s: %s open = %f close = %f percent diff = %f" % (self.symbol, maxday.date,
                                                         maxday.open, maxday.close,
                                                         maxdiff)

    def get_months(self):
        month_dict = {}
        for day in self.history:
            month_dict[day.date[0:7]] = 1
        return month_dict.keys()

    def get_days_in_month(self, month):
        days = []
        for day in self.history:
            if month == day.date[0:7]:
                days.append(day)
        return days

    def max_month_increase(self):
        maxdiff = 0.0
        maxmonth = None
        months = self.get_months()
        
        for month in months:
            days = self.get_days_in_month(month)
            lastday = days[0].close
            firstday = days[-1].close
            diff = lastday - firstday
            if diff > maxdiff:
                maxdiff = diff
                maxmonth = month
        print "%s: %s diff = %f" % (self.symbol, maxmonth, maxdiff)                

    def get_years(self):
        year_dict = {}
        for day in self.history:
            year_dict[day.date[0:4]] = 1
        return year_dict.keys()

    def get_days_in_year(self, year):
        days = []
        for day in self.history:
            if year == day.date[0:4]:
                days.append(day)
        return days

    def max_year_increase(self):
        maxdiff = 0.0
        maxyear = None
        years = self.get_years()
        
        for year in years:
            days = self.get_days_in_year(year)
            lastday = days[0].close
            firstday = days[-1].close
            diff = lastday - firstday
            if diff > maxdiff:
                maxdiff = diff
                maxyear = year
        print "%s: %s diff = %f" % (self.symbol, maxyear, maxdiff)

    def what_if(self, date_invested, amount_invested):
        current_date =date_invested
        current_num = amount_invested
        last = self.history[0]
        value = last.adj_close
        for day in self.history:
            if current_date == day.date [0:10]:
                earned = (value - day.adj_close) * float(current_num)
        print "<b>%s: earned = %f</b>" % (self.symbol, earned)

    def last_day(self):
        last = self.history[0]
        price = ((last.close - last.open) / last.open) *100
        dict1[price] = self.symbol
        return dict1

      
