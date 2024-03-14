import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Warning as WarningIcon } from '@phosphor-icons/react/dist/ssr/Warning';

export function DeleteAccount() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <WarningIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Excluir conta"
      />
      <CardContent>
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="subtitle1">
            Excluir sua conta removerá todos os dados salvos. Esse procedimento é irreversível.
          </Typography>
          <Button color="error" variant="outlined">
            Excluir conta
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
