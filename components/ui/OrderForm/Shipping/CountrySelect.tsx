import { countries } from '@/data/countries';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IOrderInput } from '@/types/orderForm';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function CountrySelect({ register, errors }: IOrderInput) {
	const isMobile1200 = useMediaQuery(1200);

	const useStyles = makeStyles({
		customAutocomplete: {
			'& .MuiIconButton-root': {
				display: 'none',
			},
		},
		customBox: {
			cursor: 'pointer',
			fontSize: isMobile1200 ? '0.875rem' : '16px',
			display: 'flex',
			alignItems: 'center',
			paddingLeft: '10px',
		},
		customTextField: {
			borderBottom: '1px solid white !important',
			'& input::placeholder': {
				color: 'a1a1a1',
				fontFamily: 'Neue Machina, sans-serif',
				fontWeight: '400',
			},
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderWidth: 0,
				},
			},
		},
	});

	const classes = useStyles();
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();

	const handleInputChange = (value: string) => {
		setValue('country', value);
		setCookie(
			'formData',
			{ ...cookies.formData, country: value },
			{ path: '/' },
		);
	};

	return (
		<label className={styles.Label}>
			<Controller
				name="country"
				control={control}
				rules={{ required: 'Please enter a your country.' }}
				defaultValue={cookies.formData?.country || null}
				render={({ field }) => (
					<Autocomplete
						{...field}
						id="country-select"
						options={countries}
						value={field.value}
						onChange={(e, value) => handleInputChange(value)}
						autoHighlight
						clearIcon={false}
						getOptionLabel={option => option.label}
						className={classes.customAutocomplete}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ '& > img': { mr: '8px', flexShrink: 0 } }}
								{...props}
								className={classes.customBox}
							>
								<img
									loading="lazy"
									width="20"
									src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
									srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								{option.label} ({option.code})
							</Box>
						)}
						renderInput={params => (
							<TextField
								{...params}
								placeholder="Country"
								inputProps={{
									...params.inputProps,
								}}
								className={classes.customTextField}
								sx={{
									input: {
										color: 'white',
										padding: '0px !important',
										fontSize: isMobile1200 ? '0.875rem' : '16px',
										paddingBottom: isMobile1200
											? '5px !important'
											: '10px !important',
									},
									div: { padding: '0px !important' },
								}}
							/>
						)}
					/>
				)}
			/>
			{errors.country && (
				<span className={styles.ErrorAlert}>{errors.country.message}</span>
			)}
		</label>
	);
}
