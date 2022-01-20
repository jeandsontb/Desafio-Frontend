import { useState } from 'react';
import { Button } from '../Forms/Button';
import { ButtonClean } from '../Forms/ButtonClean';
import Input from '../Forms/Input';
import TextArea from '../Forms/TextArea';
import S from './styled';

const Contacts = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ msg, setMsg ] = useState('');
  
  return (
    <S.Container>
      <S.Content>
        <S.BoxTitleContact>
          Contato
          <S.LineContact />
        </S.BoxTitleContact>

        <S.BoxAlignContact>
          <S.BoxLeftContact>
            <S.BoxGroupContactLeft>
              <S.TextPhone>Telefones</S.TextPhone>
              <S.TextNumberPhone>+55 (11) 3088-0757</S.TextNumberPhone>

              <S.TextEmail>E-mail</S.TextEmail>
              <S.TextAddressEmail>renee@reneetrajar.com.br</S.TextAddressEmail>

              <S.TextInfo>Atendimento Personalizado</S.TextInfo>
            </S.BoxGroupContactLeft>

            <S.BoxButton>
              <ButtonClean>
                Clique aqui!
              </ButtonClean>
            </S.BoxButton>
          </S.BoxLeftContact>

          <S.BoxRightContact>
              <S.BoxRightContent>
                <Input 
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input 
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <TextArea 
                  placeholder="Mensagem"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                >
                </TextArea>
              </S.BoxRightContent>

              <S.BoxButtonRight>
                <Button>
                  Enviar Mensagem
                </Button>
              </S.BoxButtonRight>
          </S.BoxRightContact>
        </S.BoxAlignContact>
      </S.Content>
    </S.Container>
  )
}

export { Contacts };