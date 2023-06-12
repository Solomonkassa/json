<!DOCTYPE html>
<html>
<head>
    <title>Device Information</title>
    <script>
        function getDeviceInformation() {
            var deviceName = "Unknown";
            var operatingSystem = "Unknown";
            var browser = "Unknown";
            var screenResolution = "Unknown";

            // Device Name
            if (navigator.userAgent) {
                var userAgent = navigator.userAgent;
                if (userAgent.match(/Android/i)) {
                    deviceName = "Android Device";
                } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
                    deviceName = "iOS Device";
                } else if (userAgent.match(/Windows/i)) {
                    deviceName = "Windows PC";
                } else if (userAgent.match(/Macintosh/i)) {
                    deviceName = "Macintosh";
                } else if (userAgent.match(/Linux/i)) {
                    deviceName = "Linux PC";
                }
            }

            // Operating System
            if (navigator.platform) {
                operatingSystem = navigator.platform;
            }

            // Browser
            if (navigator.userAgent) {
                var userAgent = navigator.userAgent;
                if (userAgent.indexOf("Chrome") !== -1) {
                    browser = "Google Chrome";
                } else if (userAgent.indexOf("Safari") !== -1) {
                    browser = "Safari";
                } else if (userAgent.indexOf("Firefox") !== -1) {
                    browser = "Mozilla Firefox";
                } else if (userAgent.indexOf("Edge") !== -1) {
                    browser = "Microsoft Edge";
                } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
                    browser = "Opera";
                } else if (userAgent.indexOf("Trident") !== -1 || userAgent.indexOf("MSIE") !== -1) {
                    browser = "Internet Explorer";
                }
            }

            // Screen Resolution
            screenResolution = window.screen.width + "x" + window.screen.height;

            // Display the device information to the user
            document.getElementById("device-name").innerHTML = "Device Name: " + deviceName;
            document.getElementById("os").innerHTML = "Operating System: " + operatingSystem;
            document.getElementById("browser").innerHTML = "Browser: " + browser;
            document.getElementById("screen-resolution").innerHTML = "Screen Resolution: " + screenResolution;
        }
    </script>
</head>
<body onload="getDeviceInformation()">
    <h1>Device Information</h1>
    <p id="device-name">Device Name: </p>
    <p id="os">Operating System: </p>
    <p id="browser">Browser: </p>
    <p id="screen-resolution">Screen Resolution: </p>
</body>
</html>
