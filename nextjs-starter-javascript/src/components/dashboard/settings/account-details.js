'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';

// import { Option } from '@/components/core/option';

export function AccountDetails() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <UserIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Informações básicas"
      />
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <FormControl>
              <InputLabel>Nome Completo</InputLabel>
              <OutlinedInput defaultValue="Sofia Rivers" name="fullName" />
            </FormControl>
            <FormControl disabled>
              <InputLabel>Email</InputLabel>
              <OutlinedInput name="email" type="email" value="sofia@devias.io" />
              <FormHelperText>
                <Link variant="inherit">Entre em contato</Link> para alterar seu email.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel>Empresa</InputLabel>
              <OutlinedInput name="title" placeholder="Azimolab" value="" />
            </FormControl>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="secondary">Cancelar</Button>
        <Button variant="contained">Savar</Button>
      </CardActions>
    </Card>
  );
}
