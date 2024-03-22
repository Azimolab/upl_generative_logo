import * as React from 'react';
import RouterLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';
// import { CaretDown as CaretDownIcon } from '@phosphor-icons/react/dist/ssr/CaretDown';
import { CheckCircle as CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
// import { CreditCard as CreditCardIcon } from '@phosphor-icons/react/dist/ssr/CreditCard';
// import { House as HouseIcon } from '@phosphor-icons/react/dist/ssr/House';
import { PencilSimple as PencilSimpleIcon } from '@phosphor-icons/react/dist/ssr/PencilSimple';
// import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { ShieldWarning as ShieldWarningIcon } from '@phosphor-icons/react/dist/ssr/ShieldWarning';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';

import { config } from '@/config';
import { paths } from '@/paths';
import { dayjs } from '@/lib/dayjs';
import { PropertyItem } from '@/components/core/property-item';
import { PropertyList } from '@/components/core/property-list';
// import { Notifications } from '@/components/dashboard/customer/notifications';
import { Payments } from '@/components/dashboard/customer/payments';
// import { ShippingAddress } from '@/components/dashboard/customer/shipping-address';

// import { useEffect, useState } from 'react';
//  import {  } from '@';

export const metadata = { title: `Details | Customers | Dashboard | ${config.site.name}` };

export default function Page() {

  return (
    <Box
      sx={{
        maxWidth: 'var(--Content-maxWidth)',
        m: 'var(--Content-margin)',
        p: 'var(--Content-padding)',
        width: 'var(--Content-width)',
      }}
    >
      <Stack spacing={4}>
        <Stack spacing={3}>
          <div>
            <Link
              color="text.primary"
              component={RouterLink}
              href={paths.dashboard.customers.list}
              sx={{ alignItems: 'center', display: 'inline-flex', gap: 1 }}
              variant="subtitle2"
            >
              <ArrowLeftIcon fontSize="var(--icon-fontSize-md)" />
              Usuários
            </Link>
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flex: '1 1 auto' }}>
              {/* <Avatar>
                <UserIcon fontSize="var(--Icon-fontSize)" />
              </Avatar> */}
              <div>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="h4">*USER*</Typography>
                  {/* <Chip
                    icon={<CheckCircleIcon color="var(--mui-palette-success-main)" weight="fill" />}
                    label="Active"
                    size="small"
                    variant="outlined"
                  /> */}
                </Stack>
                <Typography color="text.secondary" variant="body1">
                  *email*
                </Typography>
              </div>
            </Stack>
            {/* <div>
              <Button endIcon={<CaretDownIcon />} variant="contained">
                Action
              </Button>
            </div> */}
          </Stack>
        </Stack>
        <Grid container spacing={4}>
          <Grid lg={4} xs={12}>
            <Stack spacing={4}>
              <Card>
                <CardHeader
                  action={
                    <IconButton>
                      <PencilSimpleIcon />
                    </IconButton>
                  }
                  avatar={
                    <Avatar>
                      <UserIcon fontSize="var(--Icon-fontSize)" />
                    </Avatar>
                  }
                  title="Informações Básicas"
                />
                <PropertyList
                  divider={<Divider />}
                  orientation="vertical"
                  sx={{ '--PropertyItem-padding': '12px 24px' }}
                >
                  {[
                    // { key: 'Customer ID', value: <Chip label="USR-001" size="small" variant="soft" /> },
                    { key: 'Nome', value: 'Eduardo' },
                    { key: 'Email', value: 'mail@domain.com' },
                    // { key: 'Phone', value: '(425) 434-5535' },
                    { key: 'Empresa', value: 'Azimolab' },
                    // {
                    //   key: 'Quota',
                    //   value: (
                    //     <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    //       <LinearProgress sx={{ flex: '1 1 auto' }} value={50} variant="determinate" />
                    //       <Typography color="text.secondary" variant="body2">
                    //         50%
                    //       </Typography>
                    //     </Stack>
                    //   ),
                    // },
                  ].map((item) => (
                    <PropertyItem key={item.key} name={item.key} value={item.value} />
                  ))}
                </PropertyList>
              </Card>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar>
                      <ShieldWarningIcon fontSize="var(--Icon-fontSize)" />
                    </Avatar>
                  }
                  title="Status"
                />
                <CardContent>
                  <Chip
                    icon={<CheckCircleIcon color="var(--mui-palette-success-main)" weight="fill" />}
                    label="Autorizado"
                    size="small"
                    variant="outlined"
                  />
                </CardContent>
                <CardContent>
                  <Stack spacing={1}>

                    <div>
                      <Button color="error" variant="contained">
                        Excluir conta
                      </Button>
                    </div>
                    <Typography color="text.secondary" variant="body2">
                      Ao excluir uma conta não será possível restaurar os dados. Todos os dados serão removidos.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid lg={8} xs={12}>
            <Stack spacing={4}>
              <Payments
                ordersValue={2069.48}
                payments={[
                  {
                    currency: 'USD',
                    amount: 500,
                    invoiceId: 'INV-005',
                    status: 'completed',
                    createdAt: dayjs().subtract(5, 'minute').subtract(1, 'hour').toDate(),
                  },
                  {
                    currency: 'USD',
                    amount: 324.5,
                    invoiceId: 'INV-004',
                    status: 'refunded',
                    createdAt: dayjs().subtract(21, 'minute').subtract(2, 'hour').toDate(),
                  },
                  {
                    currency: 'USD',
                    amount: 746.5,
                    invoiceId: 'INV-003',
                    status: 'completed',
                    createdAt: dayjs().subtract(7, 'minute').subtract(3, 'hour').toDate(),
                  },
                  {
                    currency: 'USD',
                    amount: 56.89,
                    invoiceId: 'INV-002',
                    status: 'completed',
                    createdAt: dayjs().subtract(48, 'minute').subtract(4, 'hour').toDate(),
                  },
                  {
                    currency: 'USD',
                    amount: 541.59,
                    invoiceId: 'INV-001',
                    status: 'completed',
                    createdAt: dayjs().subtract(31, 'minute').subtract(5, 'hour').toDate(),
                  },
                ]}
                refundsValue={324.5}
                totalOrders={5}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}