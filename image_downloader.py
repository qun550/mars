import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

# Set up the Chrome driver with Selenium
chrome_driver_path = os.path.join(os.getcwd(), "chromedriver")
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service)

# Load the website
driver.get('https://studioshamshiri.com/')

# Find all image elements
elements = driver.find_elements_by_css_selector('img')

# Create a folder for the images
if not os.path.exists('images'):
    os.makedirs('images')

# Download each image
for i, element in enumerate(elements):
    # Get the image source URL
    src = element.get_attribute('src')

    # Download the image and save it to the folder
    filename = os.path.join('images', f'image_{i}.jpg')
    urllib.request.urlretrieve(src, filename)

# Quit the browser
driver.quit()
