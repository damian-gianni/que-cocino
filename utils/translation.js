
const language = 'es';
const TEXTS = [
	{
		key: 'vegan',
		es: 'Vegano',
		en: 'Vegan'
	},
	{
		key: 'vegetarian',
		es: 'Vegetariano',
		en: 'Vegetarian'
	},
	{
		key: 'indifferent',
		es: 'Indiferente',
		en: 'Indifferent'
	},
	{
		key: 'type.of.food',
		es: 'Seleccione tipo de comida',
		en: 'Select type of food'
	},
	{
		key: 'recipes',
		es: 'Recetas',
		en: 'Recipes'
	},
	{
		key: 'vegetables.selector',
		es: 'Seleccione sus vegetales',
		en: 'Select your vegetables'
	},
	{
		key: 'root',
		es: 'Raiz',
		en: 'Root'
	},
	{
		key: 'bulb',
		es: 'Bulbo',
		en: 'Bulb'
	},
	{
		key: 'stem',
		es: 'Tallo',
		en: 'Stem'
	},
	{
		key: 'leaf',
		es: 'Hoja',
		en: 'Leaf'
	},
	{
		key: 'flower',
		es: 'Flor',
		en: 'Flower'
	},
	{
		key: 'mealt.selector',
		es: 'Seleccione la carne',
		en: 'Select mealt'
	},
	{
		key: 'cow',
		es: 'Vaca',
		en: 'Cow'
	},
	{
		key: 'pig',
		es: 'Cerdo',
		en: 'Pig'
	},
	{
		key: 'chicken',
		es: 'Pollo',
		en: 'Chicken'
	},
	{
		key: 'fish',
		es: 'Pescado',
		en: 'Fish'
	},
	{
		key: 'time.selector',
		es: "De cuanto tiempo dispone",
		en: "How much time do you have"
	},
	{
		key: 'short.time',
		es: "5' - 10'",
		en: "5' - 10'"
	},
	{
		key: 'medium.time',
		es: "15' - 25'",
		en: "15' - 25'"
	},
	{
		key: 'long.time',
		es: "30' - 60'",
		en: "30' - 60'"
	},
	{
		key: 'review',
		es: "Revise los datos ingresados",
		en: "Review data"
	},
	{
		key: 'review.food',
		es: "Tipo de comida",
		en: "Type of food"
	},
	{
		key: 'review.vegetables',
		es: "Tipos de vegetales",
		en: "Review data"
	},
	{
		key: 'review.mealt',
		es: "Tipo de carne",
		en: "Type of mealt"
	},
	{
		key: 'review.time',
		es: "Tiempo de preparado",
		en: "Time to cook"
	}
];

export default (key) => {
	try {
		return TEXTS.find(t => t.key === key)[language]
	} catch (error) {
		console.log(`Error find the key: ${key}`);
		return key;
	}

};