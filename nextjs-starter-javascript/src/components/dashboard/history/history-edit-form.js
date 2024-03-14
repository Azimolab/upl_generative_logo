'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Image as ImageIcon } from '@phosphor-icons/react/dist/ssr/Image';
// import { Info as InfoIcon } from '@phosphor-icons/react/dist/ssr/Info';
// import { Trash as TrashIcon } from '@phosphor-icons/react/dist/ssr/Trash';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { logger } from '@/lib/default-logger';
// import { DataTable } from '@/components/core/data-table';
// import { FileDropzone } from '@/components/core/file-dropzone';
import { Option } from '@/components/core/option';
// import { TextEditor } from '@/components/core/text-editor/text-editor';
import { toast } from '@/components/core/toaster';

// function fileToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = () => {
//       reject(new Error('Error converting file to base64'));
//     };
//   });
// }

// You could memoize this function to avoid re-creating the columns on every render.
// function getImageColumns({ onRemove }) {
//   return [
//     {
//       formatter: (row) => {
//         return (
//           <Box
//             sx={{
//               backgroundImage: `url(${row.url})`,
//               backgroundPosition: 'center',
//               backgroundSize: 'cover',
//               bgcolor: 'var(--mui-palette-background-level2)',
//               borderRadius: 1,
//               flex: '0 0 auto',
//               height: '40px',
//               width: '40px',
//             }}
//           />
//         );
//       },
//       name: 'Image',
//       width: '100px',
//     },
//     { field: 'fileName', name: 'File name', width: '300px' },
//     {
//       formatter: (row) => (
//         <IconButton
//           onClick={() => {
//             onRemove?.(row.id);
//           }}
//         >
//           <TrashIcon />
//         </IconButton>
//       ),
//       name: 'Actions',
//       hideName: true,
//       width: '100px',
//       align: 'right',
//     },
//   ];
// }

const schema = zod.object({
  name: zod.string().min(1, 'Name is required').max(255),
  handle: zod.string().max(255).optional(),
  category: zod.string().max(255).optional(),
  type: zod.string().max(255).optional(),
  description: zod.string().max(5000).optional(),
  tags: zod.string().max(255).optional(),
  currency: zod.string().min(1, 'Currency is required').max(255),
  price: zod.number().min(0, 'Price must be greater than or equal to 0'),
  images: zod.array(zod.object({ id: zod.string(), url: zod.string(), fileName: zod.string() })),
  sku: zod.string().max(255).optional(),
  barcode: zod.string().max(255).optional(),
  quantity: zod.number().min(0, 'Quantity must be greater than or equal to 0'),
  backorder: zod.boolean().optional(),
  height: zod.number().min(0, 'Height must be greater than or equal to 0').optional(),
  width: zod.number().min(0, 'Width must be greater than or equal to 0').optional(),
  length: zod.number().min(0, 'Length must be greater than or equal to 0').optional(),
  weight: zod.number().min(0, 'Weight must be greater than or equal to 0').optional(),
});

function getDefaultValues(product) {
  return {
    name: product.name ?? '',
    handle: product.handle ?? '',
    category: product.category ?? '',
    type: product.type ?? 'physical',
    description: product.description ?? '',
    tags: product.tags ?? '',
    currency: product.currency ?? 'USD',
    price: product.price ?? 0,
    images: product.images ?? [],
    sku: product.sku ?? '',
    barcode: product.barcode ?? '',
    quantity: product.quantity ?? 0,
    backorder: product.backorder ?? false,
    height: product.height ?? 0,
    width: product.width ?? 0,
    length: product.length ?? 0,
    weight: product.weight ?? 0,
  };
}

export function HistoryEditForm({ product }) {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    // getValues,
    // setValue,
    watch,
  } = useForm({ defaultValues: getDefaultValues(product), resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (_) => {
      try {
        // Make API request
        toast.success('Product updated');
        router.push(paths.dashboard.products.list);
      } catch (err) {
        logger.error(err);
        toast.error('Something went wrong!');
      }
    },
    [router]
  );

  // const handleImageDrop = React.useCallback(
  //   async (files) => {
  //     // Upload images to the server

  //     const images = await Promise.all(
  //       files.map(async (file) => {
  //         const url = await fileToBase64(file);

  //         return { id: `IMG-${Date.now()}`, url, fileName: file.name };
  //       })
  //     );

  //     setValue('images', [...getValues('images'), ...images]);
  //   },
  //   [getValues, setValue]
  // );

  // const handleImageRemove = React.useCallback(
  //   (imageId) => {
  //     setValue(
  //       'images',
  //       getValues('images').filter((image) => image.id !== imageId)
  //     );
  //   },
  //   [getValues, setValue]
  // );

  const name = watch('name');
  // const handle = watch('handle');
  const category = watch('category');
  // const tags = watch('tags');
  const images = watch('images');
  const currency = watch('currency');
  const price = watch('price');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid md={8} xs={12}>
          <Card>
            <CardContent>
              <Stack divider={<Divider />} spacing={4}>
                <Stack spacing={3}>
                  <Typography variant="h6">Basic information</Typography>
                  <Grid container spacing={3}>
                    <Grid md={6} xs={12}>
                      <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                          <FormControl error={Boolean(errors.name)} fullWidth>
                            <InputLabel required>Product name</InputLabel>
                            <OutlinedInput {...field} />
                            {errors.name ? <FormHelperText>{errors.name.message}</FormHelperText> : null}
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid md={6} xs={12}>
                      <Controller
                        control={control}
                        name="handle"
                        render={({ field }) => (
                          <FormControl error={Boolean(errors.handle)} fullWidth>
                            <InputLabel>Handle</InputLabel>
                            <OutlinedInput {...field} />
                            {errors.handle ? <FormHelperText>{errors.handle.message}</FormHelperText> : null}
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid md={6} xs={12}>
                      <Controller
                        control={control}
                        name="category"
                        render={({ field }) => (
                          <FormControl error={Boolean(errors.category)} fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select {...field}>
                              <Option value="">Select a category</Option>
                              <Option value="Healthcare">Healthcare</Option>
                              <Option value="Makeup">Makeup</Option>
                              <Option value="Skincare">Skincare</Option>
                            </Select>
                            {errors.category ? <FormHelperText error>{errors.category.message}</FormHelperText> : null}
                          </FormControl>
                        )}
                      />
                    </Grid>
                    </Grid>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button color="secondary" component={RouterLink} href={paths.dashboard.products.list}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained">
                Salvar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={4} xs={12}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  {images.length ? (
                    <Box
                      sx={{
                        backgroundImage: `url(${images[0].url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        bgcolor: 'var(--mui-palette-background-level2)',
                        borderRadius: 1,
                        display: 'flex',
                        height: '100px',
                        width: '100px',
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        alignItems: 'center',
                        bgcolor: 'var(--mui-palette-background-level2)',
                        borderRadius: 1,
                        display: 'flex',
                        height: '100px',
                        justifyContent: 'center',
                        width: '100px',
                      }}
                    >
                      <ImageIcon fontSize="var(--icon-fontSize-lg)" />
                    </Box>
                  )}
                  <div>
                    <Typography color={name ? 'text.primary' : 'text.disabled'} variant="subtitle1">
                      {name || 'Product name'}
                    </Typography>
                    <Typography color={category ? 'text.secondary' : 'text.disabled'} variant="body2">
                      in {category || 'Category'}
                    </Typography>
                  </div>
                  <Typography color="text.primary" variant="body2">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
