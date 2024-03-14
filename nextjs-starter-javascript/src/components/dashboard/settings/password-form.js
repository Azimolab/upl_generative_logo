import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import { Password as PasswordIcon } from '@phosphor-icons/react/dist/ssr/Password';

export function PasswordForm() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <PasswordIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Alterar senha"
      />
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={3}>
            <FormControl>
              <InputLabel>Senha antiga</InputLabel>
              <OutlinedInput name="oldPassword" type="password" />
            </FormControl>
            <FormControl>
              <InputLabel>Nova senha</InputLabel>
              <OutlinedInput name="password" type="password" />
            </FormControl>
            <FormControl>
              <InputLabel>Reescreva a senha nova</InputLabel>
              <OutlinedInput name="confirmPassword" type="password" />
            </FormControl>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained">Salvar</Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
