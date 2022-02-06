import {useState} from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
function AddTodo({addTodo}) {

  const toast = useToast()

  function submit(e) {
    e.preventDefault();

    // Apabila tidak ada konten
    if (!content) {
      toast({
         title: 'Tidak ada konten!',
         description: "Kamu harus mengetiknya terlebih dahulu",
         status: 'error',
         duration: 4000,
         isClosable: true,
      });
      return;
    }

       const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);

    // Set bagian input menjadi kosong jika sudah menambahkan todo
    setContent('');
  }

  const [content, setContent] = useState('');
  return (
    <form onSubmit={submit}>
      <HStack mt='8'>
        <Input
          variant="filled"
          placeholder="Ketik disini"
          value={content}
          onChange={ (e) => setContent(e.target.value)}
        />
        <Button
          px='6'
          type='submit'
          colorScheme='pink'
          >Tambah Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo;
