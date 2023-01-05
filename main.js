var menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('w-full');
    menu.classList.toggle('h-screen');
}

const header = document.querySelector('[data-header]')
const sections = [...document.querySelectorAll('[data-section]')]
const logo = document.querySelector('.logo')
const menuToggle = document.querySelector('.menuToggle')
const workShowcase2 = document.getElementById('work2') 



let prevYPosition = 0
let direction = 'up'

const options = {
	rootMargin: `${header.offsetHeight * -1}px`,
	threshold: 0
}

const getTargetSection = (entry) => {
	const index = sections.findIndex((section) => section == entry.target)

	if (index >= sections.length - 1) {
	 return entry.target
	} else {
	 return sections[index + 1]
	}
}

//sets the default header colors to white on load
// window.addEventListener("load", () => {
// 	logo.setAttribute('data-logo', "purple")
// 	mobile_nav_menu_toggle.forEach((obj) => {
// 		obj.setAttribute('data-mobile_menu_lines', "purple");
// 	})
// })


const updateColors = (target) => {
	const theme = target.dataset.section
	header.setAttribute('data-theme', theme)
    header.setAttribute('data-header', theme)
	logo.setAttribute('data-logo', theme)
	menuToggle.setAttribute('data-menu', theme)
	
  console.log('background color is ' + theme);
}

const shouldUpdate = (entry) => {
	if (direction === 'down' && !entry.isIntersecting) {
		return true
	}

	if (direction === 'up' && entry.isIntersecting) {
		return true
	}

	return false
}


const onIntersect = (entries) => {
	entries.forEach((entry) => {
		if (window.scrollY > prevYPosition) {
			direction = 'down'
		} else {
			direction = 'up'
		}

		prevYPosition = window.scrollY

		const target = direction === 'down' ? getTargetSection(entry) : entry.target

		if (shouldUpdate(entry)) {
			updateColors(target)
		}
	})
}

const observer = new IntersectionObserver(onIntersect, options)

sections.forEach((section) => {
	observer.observe(section)
})





