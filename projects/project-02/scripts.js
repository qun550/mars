document.getElementById('apiBtn').addEventListener('click', function() {
  const apiInterface = document.getElementById('apiInterface');
  apiInterface.classList.toggle('hidden');
});

function createGridItem(imageUrl) {
  const item = document.createElement('div');
  item.classList.add('grid-item');
  const img = document.createElement('img');
  img.src = imageUrl;
  item.appendChild(img);
  return item;
}

function populateGrid(images, append = false) {
  console.log('Populating grid with images');
  const grid = document.getElementById('grid');

  if (!append) {
    grid.innerHTML = '';
  }
  
  for (const imageUrl of images) {
    const gridItem = createGridItem(imageUrl);
    grid.appendChild(gridItem);
  }
  

  const overlay = document.getElementById('overlay');
  const fadeInDuration = 300;
  const fadeOutDuration = 300;

  let fadeOutTimeout;

  function fadeIn(element, duration) {
    clearTimeout(fadeOutTimeout); // Cancel any ongoing fadeOut transition
    element.style.display = 'block';
    setTimeout(() => {
      element.style.opacity = '1';
    }, 10); // Short delay to ensure the display has changed before starting the transition
  }

  function fadeOut(element, duration) {
    element.style.opacity = '0';
    fadeOutTimeout = setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }

  // Re-select grid items after modifying their outerHTML
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    // Remove existing event listeners
    item.outerHTML = item.outerHTML;
  });

  // Re-select grid items after modifying their outerHTML
  const updatedGridItems = document.querySelectorAll('.grid-item');

  updatedGridItems.forEach((item) => {
    const img = item.querySelector('img');

    item.addEventListener('mouseenter', () => {
      console.log('mouseenter event');
      fadeIn(overlay, fadeInDuration);
      const rect = img.getBoundingClientRect();
      const scalingFactor = Math.min(window.innerWidth / img.width, window.innerHeight / img.height) * 0.8;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const translateX = centerX - (rect.left + img.width / 2);
      const translateY = centerY - (rect.top + img.height / 2);

      img.style.transformOrigin = '50% 50%';
      img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scalingFactor})`;
    });

    item.addEventListener('mouseleave', () => {
      console.log('mouseleave event');
      fadeOut(overlay, fadeOutDuration);
      img.style.transform = 'scale(1)';
    });
  });
}


  const defaultImages = [
    'https://drive.google.com/uc?id=10qMnTrbbPrvmgIFVGeVlAF3_bfRxF4_Z',
    'https://drive.google.com/uc?id=12MybGGv3g3ZzEpxGBCdFppNay6drO3yZ',
    'https://drive.google.com/uc?id=12Qr0NeRJ3Rh3pOEHnvHpnUEKjr3yjec6',
    'https://drive.google.com/uc?id=13A3wSmk1-_qIpB9MfPgsbAZuXAkBgbkN',
    'https://drive.google.com/uc?id=13bEWQivO_Amj7fqsoDmoIWDBU1tals-w',
    'https://drive.google.com/uc?id=13e2MrRaN-E8ljTnTlJ2E7lBqQAf6kqCV',
    'https://drive.google.com/uc?id=153ycI3PNBnV_4aUb4VTWDuZzAPjUSVyZ',
    'https://drive.google.com/uc?id=16OEPPJEUtm1n7W5xGzzSQOs297LPSKCT',
    'https://drive.google.com/uc?id=19gYJnNRxfFF_NHXETt0c9kEuBOu17Ctf',
    'https://drive.google.com/uc?id=1AiqqE2D06A4FFIw93zAIfuRyjUzLt1_e',
    'https://drive.google.com/uc?id=1BDaDN0awBr4Wd-snIhZ6fucpq55tGqA9',
    'https://drive.google.com/uc?id=1CkrKIaviEHEEOYC4zh8vfA0icvTrsK7w',
    'https://drive.google.com/uc?id=1DRAJOVIkEG8h8fNRZviMadH2QxqcUOe8',
    'https://drive.google.com/uc?id=1DZNJ8wD4O_x4J0PyGoTNL_0G24miKORU',
    'https://drive.google.com/uc?id=1Dx2ZmuxFysJn7e3s7v8dyclelkF9_cLA',
    'https://drive.google.com/uc?id=1G7pM9t4FIWQG3qyTEkN22fTaQwG9dxXc',
    'https://drive.google.com/uc?id=1HVgeL6zKGAFCxhab1DhjDvoJVJhUYJ5s',
    'https://drive.google.com/uc?id=1J1PYDpA6qTuvCVocPLQ4R6uR9p8ZLu_e',
    'https://drive.google.com/uc?id=1JcZixCPy4y0sC0arjOSIVJuYTnGgTXyK',
    'https://drive.google.com/uc?id=1JjrnrkmS73fA-kaDAlJ0QEm-EtV2O_Cs',
    'https://drive.google.com/uc?id=1QMLTr7SPY2M-jo56q4OIxU9sUtP5bVuW',
    'https://drive.google.com/uc?id=1S0JL1Xqw9dB9haFfJEwWjZlW2-INTO0d',
    'https://drive.google.com/uc?id=1UaBLGCrL0t0AIal2zvkF3sQjJrdis8Uj',
    'https://drive.google.com/uc?id=1W2XVQ6xD_rDnqUJM6axJZFLA4gi-1exp',
    'https://drive.google.com/uc?id=1WTcpIcbwDbJow83ct5GpAihQm3PkK2iC',
    'https://drive.google.com/uc?id=1WtEk865WQOFUJIIJzyt6yhLIiHbcjRv2',
    'https://drive.google.com/uc?id=1YqqHzHBuXrZSBsA6KkMo5_2yIqiUqRb_',
    'https://drive.google.com/uc?id=1Zh_D-dUFrrdIeEj4oMz4ROtPM1tPUsud',
    'https://drive.google.com/uc?id=1a4y_90iQxPrKIIWcCtVlTX-opzM7DErN',
    'https://drive.google.com/uc?id=1anqThr_tMs-PbIT6oigdSb6zOE4YZUwQ',
    'https://drive.google.com/uc?id=1e06NF_3c3SuK-XA5qqL2fs0pPpBgTWkl',
    'https://drive.google.com/uc?id=1ejt-HRS1NM0VMjaqofSXjUYPrNYa40iW',
    'https://drive.google.com/uc?id=1fYJMZVxGv3hTrC4_fXOEnqZhMiu8TI-C',
    'https://drive.google.com/uc?id=1kPsjxHf02RP7Hpn7GOhvhMit3aNUQx-i',
    'https://drive.google.com/uc?id=1knY0j2x6hcspAl0tDP5-WsqZ2ecn8B7F',
    'https://drive.google.com/uc?id=1lFeTDlHw_6HnoyjRdrxnLa9KOcl5jd3T',
    'https://drive.google.com/uc?id=1mLCI9YpjhsDawxrjv11iMiDBLKrmXGov',
    'https://drive.google.com/uc?id=1oWbrog5nf5rXYjJkhXDIE7BLr67ItEa_',
    'https://drive.google.com/uc?id=1tk8u3KbNlia1BseUNzmjOGibQXPSQLqd',
    'https://drive.google.com/uc?id=1ujjc7xlXQODtEquIn528v9nsWvICBD82',
    'https://drive.google.com/uc?id=1uxmnfZSmloBT5HLgT2lTvKNskk_i4BDM',
    'https://drive.google.com/uc?id=1vxZT8HJ3uQE8FmMmYozIA_Aac8-xLhNn'
  ];
  

  document.getElementById('generateBtn').addEventListener('click', function() {
    console.log('API key submitted, loading DALL-E images');
    loadDALLEImages();
  });
  
  async function getDALLEImages() {
    console.log('Fetching DALL-E images');
    const apiKey = document.getElementById('apiKey').value;
    const prompt = document.getElementById('prompt').value;
  
    const imagesPerRequest = 10;
    const totalImages = 50;
    const numRequests = totalImages / imagesPerRequest;
    const allImages = [];
  
    for (let i = 0; i < numRequests; i++) {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          "prompt": prompt,
          "num_images": imagesPerRequest,
          "size": "256x256",
          "response_format": "url"
        })
      });
  
      const data = await response.json();
      console.log('Data received from API:', data);
  
      if (data.data) {
        const images = data.data.map(item => item.url);
        console.log(`DALL-E images fetched (${(i + 1) * imagesPerRequest} / ${totalImages})`, images);
        allImages.push(...images);
      } else {
        console.error('Unexpected data format:', data);
        throw new Error('Unexpected data format');
      }
    }
  
    console.log('DALL-E images fetched', allImages);
    return allImages;
  }
  
  
  
  async function loadDALLEImages() {
    try {
      const images = await getDALLEImages();
      populateGrid(images);
    } catch (error) {
      console.error('Error loading DALL-E images:', error);
    }
  }
  
  // Load the default images when the page is loaded.
  populateGrid(defaultImages);
  