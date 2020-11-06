//防抖函数
export function debounce(fun, delay = 100) {
	
	let timer = null

	return function(...args) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fun.apply(this, args);
		}, delay)
	}
}
