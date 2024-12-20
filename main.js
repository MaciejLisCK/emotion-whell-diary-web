const areas = document.getElementsByTagName('area');
for (const area of areas) {
    area.addEventListener('click', () => console.log(area.title));
}
