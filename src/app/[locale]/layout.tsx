import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
 
export default async function LocaleLayout({children, params: {locale}}: {
  unstable_setRequestLocale(locale);
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
            {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}