'use client';
import { getProductByCategoryFx } from '@/api/products';
import ProductCards from '@/components/modules/Product/ProductCards/ProductCards';
import Paginate from '@/components/ui/Buttons/paginate/Paginate';
import { $products, setProducts } from '@/context/products';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IQueryParams } from '@/types/catalog';
import { IProductList } from '@/types/products';
import { useStore } from 'effector-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './CatalogProducts.module.scss';

export default function CatalogProducts({
	query,
	category,
}: {
	query: IQueryParams;
	category: string | undefined;
}) {
	const products = useStore($products);
	const [spinner, setSpinner] = useState(false);
	const isMobile960 = useMediaQuery(960);
	const productsOnPage = isMobile960 ? 8 : 9;
	const pagesCount = Math.ceil(products.count / productsOnPage);
	const isValidOffset =
		query.offset && !isNaN(+query.offset) && +query.offset > 0;
	const [currentPage, setCurrentPage] = useState(
		isValidOffset ? +query.offset - 1 : 0,
	);
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const data = await getProductByCategoryFx({
				url: `/products/category?limit=${productsOnPage}&offset=0`,
				category,
			});

			if (!isValidOffset) {
				router.push(pathname + '?' + createQueryString('offset', '1'));

				resetPagination(data);
				return;
			}

			if (isValidOffset) {
				if (+query.offset > Math.ceil(data.count / productsOnPage)) {
					router.push(pathname + '?' + createQueryString('offset', '1'));

					setCurrentPage(0);
					setProducts(data);
					return;
				}
			}

			const offset = +query.offset - 1;
			const result = await getProductByCategoryFx({
				url: `/products/category?limit=${productsOnPage}&offset=${offset}`,
				category,
			});

			setCurrentPage(offset);
			setProducts(result);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setTimeout(() => setSpinner(false), 1000);
		}
	};

	const resetPagination = (data: IProductList) => {
		setCurrentPage(0);
		setProducts(data);
	};

	const handlePageChange = async ({ selected }: { selected: number }) => {
		try {
			const data = await getProductByCategoryFx({
				url: `/products/category?limit=${productsOnPage}&offset=0`,
				category,
			});

			if (selected > pagesCount) {
				resetPagination(data);
				return;
			}

			if (isValidOffset && +query.offset > Math.ceil(data.count / 2)) {
				resetPagination(data);
				return;
			}

			const result = await getProductByCategoryFx({
				url: `/products/category?limit=${productsOnPage}&offset=${selected}`,
				category,
			});

			router.push(
				pathname + '?' + createQueryString('offset', `${selected + 1}`),
			);

			setCurrentPage(selected);
			setProducts(result);
		} catch (error) {}
	};

	return (
		<section className={styles.CatalogProducts}>
			<ProductCards products={products.rows} spinner={spinner} />
			<Paginate
				currentPage={currentPage}
				pagesCount={pagesCount}
				handlePageChange={handlePageChange}
			/>
		</section>
	);
}
