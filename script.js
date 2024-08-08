document.addEventListener("DOMContentLoaded", function() {
    const birthdayContent = document.getElementById('birthday-content');
    const beforeBirthday = document.getElementById('before-birthday');

    const unlockDate = new Date('2024-08-09T00:00:00+05:30').getTime(); // IST time

    const checkDate = () => {
        const now = new Date().getTime();
        
        if (now >= unlockDate) {
            beforeBirthday.classList.add('hidden');
            birthdayContent.classList.remove('hidden');
        } else {
            beforeBirthday.classList.remove('hidden');
            birthdayContent.classList.add('hidden');
        }
    };

    checkDate();
    setInterval(checkDate, 1000); // Check every second

    window.celebrate = function() {
        window.location.href = "https://meet.google.com/urn-vrko-vre"; // Replace with your custom video SDK platform URL
    };
});
