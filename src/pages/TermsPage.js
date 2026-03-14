import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 mt-[60px] m-auto px-4 sm:px-8 max-w-[900px]">
        <div className="text-center w-full mt-10 md:mt-20">
          <h1 className="text-brandPink font-chango text-3xl md:text-5xl m-0 p-0 drop-shadow-sm">
            Termos de Uso
          </h1>
          <p className="mt-4 text-mainText text-lg md:text-xl font-sans max-w-[800px] mx-auto leading-relaxed">
            Última atualização: Março de 2026
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10 text-mainText font-sans">
          <p className="mb-6 leading-relaxed">
            Bem-vindo ao Colorashin! Ao acessar e utilizar nosso site e
            serviços, você concorda com os seguintes Termos de Uso. Por favor,
            leia-os com atenção.
          </p>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="leading-relaxed text-[#555]">
              Ao acessar ou usar o Colorashin, você aceita e concorda em
              cumprir estes Termos de Uso. Se você não concordar com qualquer
              parte destes termos, não deverá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              2. Descrição do Serviço
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              O Colorashin é uma plataforma que transforma imagens em páginas
              para colorir. Nossos serviços incluem:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Processamento de imagens para formato para colorir</li>
              <li>Download das imagens processadas em PDF</li>
              <li>Armazenamento temporário de imagens</li>
              <li>Acesso à sua conta e histórico de transformações</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              3. Cadastro e Conta
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Para utilizar nossos serviços, você pode criar uma conta. Você
              concorda em:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Fornecer informações verdadeiras e completas</li>
              <li>Manter a segurança da sua senha</li>
              <li>Ser responsável por todas as atividades em sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              4. Uso das Imagens
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">
                Propriedade das Imagens:
              </span>{" "}
              Você mantém a propriedade de todas as imagens que envia ao
              Colorashin.
            </p>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">
                Uso das Imagens Processadas:
              </span>{" "}
              As imagens processadas são suas para uso pessoal e comercial. Você
              pode imprimi-las, compartilhá-las e usá-las como entender.
            </p>
            <p className="leading-relaxed text-[#555]">
              <span className="font-bold text-mainText">
                Responsabilidade pelas Imagens Enviadas:
              </span>{" "}
              Você garante que tem o direito de usar as imagens que envia e que
              elas não infringem direitos de terceiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              5. Proibições
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Você NÃO pode:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Enviar imagens ilegais, pornográficas ou que infrinjam direitos</li>
              <li>Tentar acessar sistemas não autorizados</li>
              <li>Usar o serviço para fins ilícitos</li>
              <li>Copiar, modificar ou distribuir nosso código ou tecnologia</li>
              <li>Realizar engenharia reversa em nosso sistema</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p className="leading-relaxed text-[#555]">
              O Colorashin é fornecido "como está". Não garantimos que o
              serviço será contínuo, seguro ou livre de erros. Não nos
              responsabilizamos por danos indiretos, incidentais ou
              consequenciais decorrentes do uso do serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              7. Modificações nos Termos
            </h2>
            <p className="leading-relaxed text-[#555]">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
              momento. As alterações entrarão em vigor quando publicadas no
              site. O uso contínuo do serviço após alterações constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              8. Rescisão
            </h2>
            <p className="leading-relaxed text-[#555]">
              Podemos rescindir ou suspender seu acesso ao serviço a qualquer
              momento, sem aviso prévio, se você violar estes Termos de Uso ou
              por qualquer outro motivo a nosso critério.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              9. Contato
            </h2>
            <p className="leading-relaxed text-[#555]">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato
              conosco através da página de{" "}
              <a href="/help" className="text-brandPink hover:underline">
                Ajuda e Contato
              </a>
              .
            </p>
          </section>

          <div className="border-t border-[#eee] pt-6 mt-8">
            <p className="text-sm text-[#777]">
              Ao usar o Colorashin, você reconhece ter lido, entendido e aceito
              estes Termos de Uso.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
