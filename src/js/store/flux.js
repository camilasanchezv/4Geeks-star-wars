const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favourites: []
		},
		actions: {
			getCharacters: () => {
				fetch("http://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch();
			},
			getPlanets: () => {
				fetch("http://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch();
			},
			addFavourite: newFav => {
				const store = getStore();
				setStore({ favourites: [...store.favourites, newFav] });
			},
			removeFavourite: remove => {
				const store = getStore();
				setStore({ favourites: store.favourites.filter(favourite => favourite !== remove) });
			}
		}
	};
};

export default getState;
