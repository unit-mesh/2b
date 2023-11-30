import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import LiveEditor from '@/components/editor/live-editor'
import { Settings } from '@/components/settings'
import '@/i18n/i18n';
import { Theme } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio B3 - all you need is editor!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Theme>
            <Settings />
            <LiveEditor />
          </Theme>
        </div>
      </main>
    </div>
  );
}