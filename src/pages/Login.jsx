import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Login(){
  const navigate = useNavigate();
    
    function handleCreateAccount() {
        navigate("/cadastro");
      }

      function handleLogin() {
        toast.error(
          "Nossa base de usuário está cheia no momento, tente novamente mais tarde."
        );
      }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
          <div className="md:max-w-[70%] w-full bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
            <div className="flex-1 flex flex-col md:flex-row h-full">
              <div className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 items-center justify-center">
                <p className="text-white text-8xl">LOGO</p>
                
              </div>
              <form className="flex-1 flex flex-col gap-3 p-5 bg-white rounded-tr-[40px] rounded-br-[80px] rounded-tl-[80px] justify-center">
                <div className="flex flex-col items-center px-5 py-8 w-full">
                  <span className="text-bg-primary text-4xl text-center font-normal">
                    Olá, <br /> Seja bem vindo!
                  </span>
                  <div className="flex flex-col gap-8 w-full mt-10">
                    <Input
                      placeholder="E-mail"
                      
                    />
                    <Input
                      placeholder="Senha"
                      type="password"
                     
                    />
                  </div>
                  <span
                    className="text-bg-primary text-base cursor-pointer underline text-end w-full mt-2"
                   
                  >
                    Esqueceu a senha?
                  </span>
                  <Button
                    variant="default"
                    type="button"
                    className="bg-primary text-white text-lg w-full rounded-[5px] h-14 mt-10"
                    onClick={handleLogin}
                  >
                   Fazer Login
                  </Button>
                  <span
                    className="text-bg-primary text-base cursor-pointer underline text-center w-full mt-2"
                    onClick={handleCreateAccount}
                  >
                    Criar conta
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }