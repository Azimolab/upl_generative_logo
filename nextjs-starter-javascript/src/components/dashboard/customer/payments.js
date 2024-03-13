'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
// import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { ListChecks as ListChecksIcon } from '@phosphor-icons/react/dist/ssr/ListChecks';

import { dayjs } from '@/lib/dayjs';
import { DataTable } from '@/components/core/data-table';

const columns = [
  {
    formatter: (row) => (
      <Typography sx={{ whiteSpace: 'nowrap' }} variant="subtitle2">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: row.currency }).format(row.amount)}
      </Typography>
    ),
    name: 'Amount',
    width: '200px',
  },
  {
    formatter: (row) => {
      const mapping = {
        pending: { label: 'Pending', color: 'warning' },
        completed: { label: 'Completed', color: 'success' },
        canceled: { label: 'Canceled', color: 'error' },
        refunded: { label: 'Refunded', color: 'error' },
      };
      const { label, color } = mapping[row.status] ?? { label: 'Unknown', color: 'secondary' };

      return <Chip color={color} label={label} size="small" variant="soft" />;
    },
    name: 'Status',
    width: '200px',
  },
  {
    formatter: (row) => {
      return <Link variant="inherit">{row.invoiceId}</Link>;
    },
    name: 'Invoice ID',
    width: '150px',
  },
  {
    formatter: (row) => (
      <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
        {dayjs(row.createdAt).format('MMM D, YYYY hh:mm A')}
      </Typography>
    ),
    name: 'Date',
    align: 'right',
  },
];

export function Payments({ ordersValue, payments = [], refundsValue, totalOrders }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <ListChecksIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Histórico"
      />
      <CardContent>
        <Stack spacing={3}>
          <Card sx={{ borderRadius: 1 }} variant="outlined">
            <Box sx={{ overflowX: 'auto' }}>
              <DataTable columns={columns} rows={payments} />
            </Box>
          </Card>
        </Stack>
      </CardContent>
    </Card>
  );
}
