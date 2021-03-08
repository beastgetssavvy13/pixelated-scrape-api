# from selenium import webdriver
# from selenium.webdriver.common.by import By
# import time
# import csv
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# gecko_path = 'C:\Users\Kavish\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\geckodriver.exe'

# options = webdriver.firefox.options.Options()
# options.headless = False
# driver = webdriver.Firefox(options = options, executable_path = gecko_path)
# url = 'https://www.zaubacorp.com/company-directors/EPIKINDIFI-SOFTWARE-SOLUTIONS-PRIVATE-LIMITED/U72900TN2018PTC120848'
# driver.get(url)
# wait = WebDriverWait(driver, 5)
# driver.implicitly_wait(5)

# wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'card__title')))
# countries = driver.find_elements_by_class_name('card__title')
