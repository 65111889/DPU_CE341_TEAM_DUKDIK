function getIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = 'IP Address ของคุณคือ : ' + data.ip;
        })
        .catch(error => console.error('Error fetching IP address:', error));
}
window.onload = getIPAddress;
