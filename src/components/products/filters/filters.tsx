import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
	selectSortingValue,
	setSortingValue,
	SortingType,
} from "../../../slices/products.slice";

const Filters: React.FC = () => {
	const sortingValue = useAppSelector(selectSortingValue);
	const dispatch = useAppDispatch();

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setSortingValue(event.target.value as SortingType));
	};

	return (
		<>
			<FormControl fullWidth sx={{ marginBottom: 5 }}>
				<InputLabel id="sorting">Sorting</InputLabel>
				<Select
					labelId="sorting"
					id="sorting-select"
					value={sortingValue}
					label="Sorting"
					onChange={handleChange}>
					<MenuItem value={"none"}>Default</MenuItem>
					<MenuItem value={"id-asc"}>By Id - Ascending</MenuItem>
					<MenuItem value={"id-desc"}>By Id - Descending</MenuItem>
					<MenuItem value={"name-asc"}>By Name - Ascending</MenuItem>
					<MenuItem value={"name-desc"}>By Name - Descending</MenuItem>
					<MenuItem value={"price-asc"}>By Price - Ascending</MenuItem>
					<MenuItem value={"price-desc"}>By Price - Descending</MenuItem>
					<MenuItem value={"quantity-asc"}>By Quantity - Ascending</MenuItem>
					<MenuItem value={"quantity-desc"}>By Quantity - Descending</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default Filters;
