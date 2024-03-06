document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('https://your-cloudflare-worker.yourdomain.workers.dev');
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
