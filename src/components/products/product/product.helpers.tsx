const photos: string[] = [
	"https://images.unsplash.com/photo-1543487945-139a97f387d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	"https://images.unsplash.com/photo-1599498448014-81d90414c50a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
	"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];

export const getRandomPhoto = () => {
	const item = photos[Math.floor(Math.random() * photos.length)];
	return item;
};
