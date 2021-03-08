from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import csv
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from flask import Flask, render_template
from bs4 import BeautifulSoup
import requests
source = requests.get('https://www.zaubacorp.com/company-directors/EPIKINDIFI-SOFTWARE-SOLUTIONS-PRIVATE-LIMITED/U72900TN2018PTC120848').text
soup = BeautifulSoup(source, 'lxml')
section=soup.find('table')
offsection=section.find_all('td')
l=[]
for i in offsection:
    if (i.find_all('a')):
        l.append(i.find('a').contents[0])
        print(str(i.find('a')['href']).strip('/'))
    
print(l)

r = requests.post("http://localhost:5000/getDirectors", data={
    "directors":l
})
		