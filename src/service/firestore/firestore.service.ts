import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { firestore } from "../..";
import { Product } from "../../slices/products.slice";

const firestoreServiceDef = () => {
	const getProducts = async (): Promise<Product[]> => {
		try {
			const collectionRef = collection(firestore, "products");
			const q = query(collectionRef);
			const snapshots = await getDocs(q);
			const products: Product[] = snapshots.docs.map((snap) => ({
				...(snap.data() as Product),
				firebaseId: snap.id,
			}));
			return products;
		} catch (error) {
			console.log(error);
			return [];
		}
	};

	const createProduct = async (product: Product): Promise<void> => {
		try {
			const collectionRef = collection(firestore, "products");
			await addDoc(collectionRef, product);
		} catch (error) {
			console.log(error);
		}
	};

	const createMockProductData = async (products: Product[]) => {
		products.forEach((product) => {
			createProduct(product);
		});
	};

	return {
		getProducts,
		createProduct,
		createMockProductData,
	};
};

export const firestoreService = firestoreServiceDef();
