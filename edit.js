const API = 'http://localhost:3000/product'

document.addEventListener('DOMContentLoaded', async () =>{
    
    const urlParams = new URLSearchParams(window.location.search)
	const productId = urlParams.get('id')

	const product = await fetchProductById(productId)

	document.getElementById('title').value = product.title
	document.getElementById('description').value = product.description
	document.getElementById('price').value = product.price
	document.getElementById('img').value = product.img

    const editForm = document.getElementById('form')
	editForm.addEventListener('submit', async (e) => {
		e.preventDefault()
		const newProduct = {
			title: document.getElementById('title').value,
			description: document.getElementById('description').value,
			price: document.getElementById('price').value,
			img: document.getElementById('img').value
		}
		await updateProduct(productId, newProduct)


	})
})
	


