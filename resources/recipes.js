export const getRecipesByType = (type) => {
	try {
		return RECIPES.filter(r => r.typeOfFood === type);
	} catch (error) {
		console.log('error');
	}
};

const RECIPES = [
	{
		key: 0,
		name: 'Revuelto 3 Colores',
		ingredients: [
			'Papa',
			'Morron',
			'Cebolla',
			'Ajo',
			'Verdeo',
			'Sal',
			'Aceite',
			'Oregano'
		],
		steps: [
			"Pelamos y cortamos las Papas en cubos. Picamos la Cebolla (en forma grosera). Picamos el Morrón Rojo en cusdrados de 1x1 cm.",
			"En una Sartén con unos hilos de Aceite doramos las Papas y llevamos a un Bowl y salamos (yo particularmente en un mortero piso Sal Gruesa hasta hacerla entrefins o fina). Reservamos. En ese mismo Aceite rehogamos la Cebolla y el Morrón a fuego bajo.",
			"Una vez que transparente y/o transpire la Cebolla y el Morrón le sumamos la Cebolla de Verdeo, el Ajo picado bien chico, mezclamos y condimentamos. Luego de unos minutos sumamos las Papas y movemos a fuego bajo por un par de minutos. Servimos."
		],
		typeOfFood: 'vegan',
		time: 10,
		diners: 3
	},
	{
		name: 'Sorrentinos de calabaza con salsa de champiñones y crema',
		ingredients: [
			'Huevo',
			'Harina',
			'Sal',
			'Agua',
			'Calabaza',
			'Jamon cocido',
			'Queso rallado',
			'Pimienta',
			'Nuez Moscada',
			'Champigñones',
			'Cebolla',
			'Ajo',
			'Vino blanco',
			'Crema'
		],
		steps: [
			"Unir la harina con los huevos más un poco de sal, el agua necesaria para terminar de unir la masa.Dejar reposar por 10 minutos luego estirar con máquina o con palote.Con respecto al relleno hacer puré con la calabaza condimentar y agregar el jamón y queso rallado.poner el relleno dentro del hueco para sorrentinos previo estirado de masa.",
			"Cerrar con otra tapa de masa y listos.podes congelarlos así en bandeja luego guardarlos en bolsa.",
			"Para la salsa rehogar cebolla con ajo. Luego poner los champigñones fileteados. El vino blanco y dejar que evapore el alcohol. Último la crema y condimentar."
		],
		typeOfFood: 'indifferent',
		time: 10,
		diners: 8
	}
];