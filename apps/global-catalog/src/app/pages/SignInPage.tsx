import { CdsAlert, CdsAlertGroup } from '@cds/react/alert';
import { CdsButton } from '@cds/react/button';
import { CdsFormGroup } from '@cds/react/forms';
import { CdsInput } from '@cds/react/input';
import { FormEvent, useState } from 'react';

import { useAuth } from '../core/context/AuthContext';
import { l10n } from '@vmware/i18n';

export default function SignInPage() {
  // const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signOut, error, status } = useAuth();

  const formInvalid = username === '' || password === '';

  function submit(e: FormEvent) {
    e.preventDefault();

    const payload = { username, password };
    signIn(payload);
  }

  return (
    <div
      className="relative flex bg-[url('data:image/svg+xml;charset=utf8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%0D%0A%20%20%20%20%20version%3D%221.1%22%0D%0A%20%20%20%20%20id%3D%22no-aspect-ratio%22%0D%0A%20%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0D%0A%20%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%0D%0A%20%20%20%20%20x%3D%220px%22%0D%0A%20%20%20%20%20y%3D%220px%22%0D%0A%20%20%20%20%20height%3D%222055.55px%22%0D%0A%20%20%20%20%20width%3D%221440px%22%0D%0A%20%20%20%20%20viewBox%3D%220%200%202055.55%201440%22%0D%0A%20%20%20%20%20preserveAspectRatio%3D%22xMinYMin%20slice%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%3Cdesc%3ELogin%20Image%3C%2Fdesc%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%280.000000%2C%20-4.000000%29%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cg%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%23FAFAFA%22%20x%3D%220%22%20y%3D%224%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23007CBB%22%20opacity%3D%220.4%22%20style%3D%22mix-blend-mode%3A%20multiply%3B%22%20points%3D%221108.43%201443.63%201109.08%201443.63%20443.44%20777.74%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2393D8CA%22%20opacity%3D%220.6%22%20style%3D%22mix-blend-mode%3A%20overlay%3B%22%20points%3D%220.79%20334.92%20443.44%20777.74%200.79%20334.49%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%220.79%20211.88%200.79%20329.6%2059.62%20270.77%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%22160.65%20169.74%200.79%209.73%200.79%20211.88%2090.27%20301.46%2059.62%20270.77%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23CDE3EE%22%20points%3D%22503.77%201443.63%20697.47%201443.63%20803.74%201337.36%20706.93%201240.43%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23CDE3EE%22%20points%3D%22158.33%20691.15%200.79%20848.72%200.79%201427.43%20447.52%20980.7%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23CEDDE0%22%20points%3D%22257.71%20591.75%200.79%20334.49%200.79%20533.42%20158.33%20691.15%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A9C9D5%22%20points%3D%220.79%20533.42%200.79%20848.72%20158.33%20691.15%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23AFD4E7%22%20points%3D%22806.46%201140.89%20546.94%20881.28%20447.52%20980.7%20706.93%201240.43%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%238FC4DF%22%20points%3D%22447.52%20980.7%200.79%201427.43%200.79%201443.63%20503.77%201443.63%20706.93%201240.43%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2370C0DC%22%20points%3D%22608.23%20819.99%20546.94%20881.28%20806.46%201140.89%20867.64%201079.7%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%22420.05%20429.39%20319.01%20530.45%20608.23%20819.99%20709.3%20718.91%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2369AFD4%22%20points%3D%22709.3%20718.91%20608.23%20819.99%20867.64%201079.7%20968.74%20978.6%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%238EB5BC%22%20points%3D%22619.59%20229.82%20393.42%203.12%20327.27%203.12%20160.65%20169.74%20420.05%20429.39%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%238EB5BC%22%20points%3D%22319.01%20530.45%20319.01%20530.45%2090.27%20301.46%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%237CB0C7%22%20points%3D%22160.65%20169.74%2059.62%20270.77%2090.27%20301.46%20319.01%20530.45%20420.05%20429.39%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2384C4D2%22%20points%3D%2259.62%20270.77%200.79%20329.6%200.79%20334.49%20257.71%20591.75%20319.01%20530.45%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%237CB0C7%22%20points%3D%22537.55%203.12%20393.42%203.12%20619.59%20229.82%20691.74%20157.66%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2387D1DB%22%20points%3D%22846.25%203.12%20537.55%203.12%20691.74%20157.66%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23CDE3EE%22%20points%3D%22909.87%201443.63%20850.19%201383.87%20790.43%201443.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%22319.01%20530.45%20257.71%20591.75%20443.44%20777.74%20546.94%20881.28%20608.23%20819.99%20867.64%201079.7%20867.64%201079.7%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%22867.64%201079.7%20806.46%201140.89%20903.31%201237.78%20964.46%201176.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%221065.57%201075.52%20968.74%20978.6%20867.64%201079.7%20964.46%201176.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%22964.46%201176.63%20867.64%201079.7%20867.64%201079.7%20964.46%201176.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%221010.92%201223.13%201231.16%201443.63%201010.92%201223.13%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%221240.08%20707.22%201167.9%20779.4%201264.68%20876.4%201336.87%20804.22%201240.08%20707.21%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%22980.83%20447.39%20691.74%20157.66%20619.59%20229.82%20908.66%20519.56%20980.83%20447.39%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23AFD4E7%22%20points%3D%22709.3%20718.91%20968.74%20978.6%201167.91%20779.4%20908.66%20519.55%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2369AFD4%22%20points%3D%22980.83%20447.39%20908.66%20519.55%201167.91%20779.4%201240.08%20707.21%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%221034.59%203.12%20846.25%203.12%20691.74%20157.66%20980.83%20447.39%201229.75%20198.47%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%221240.08%20707.21%201336.87%20804.22%201586.01%20555.08%201489.14%20458.12%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2370C0DC%22%20points%3D%221229.75%20198.47%20980.83%20447.39%201240.08%20707.21%201489.14%20458.12%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23B7CED2%22%20points%3D%221292.22%201302.38%201433.32%201443.63%201830.61%201443.63%201491.18%201103.42%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%221010.92%201223.13%20949.78%201284.27%201109.08%201443.63%201150.98%201443.63%201191.09%201403.51%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2375B8C5%22%20points%3D%221150.98%201443.63%201231.16%201443.63%201191.09%201403.51%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%221292.22%201302.38%201112.03%201122.02%201010.92%201223.13%201191.09%201403.51%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%236EA4BC%22%20points%3D%221191.09%201403.51%201231.16%201443.63%201433.32%201443.63%201292.22%201302.38%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23007CBB%22%20opacity%3D%220.4%22%20style%3D%22mix-blend-mode%3A%20multiply%3B%22%20points%3D%221383.3%20850.75%201311.12%20922.94%201491.18%201103.42%201563.37%201031.23%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23B7CED2%22%20points%3D%221491.18%201103.42%201830.61%201443.63%201974.86%201443.63%201563.37%201031.23%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%236EA4BC%22%20points%3D%221491.18%201103.42%201830.61%201443.63%201974.86%201443.63%201563.37%201031.23%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%221812.65%20781.95%201632.46%20601.59%201383.3%20850.75%201563.37%201031.23%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23B7CED2%22%20points%3D%221563.37%201031.23%201974.86%201443.63%202054.45%201443.63%202054.45%201023.99%201812.65%20781.95%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2378CAD4%22%20points%3D%221563.37%201031.23%201974.86%201443.63%202054.45%201443.63%202054.45%201023.99%201812.65%20781.95%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2391C5E0%22%20points%3D%22803.74%201337.36%20850.19%201383.87%20949.78%201284.27%20903.31%201237.78%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2391C5E0%22%20points%3D%221065.57%201075.52%201112.03%201122.02%201311.12%20922.94%201264.69%20876.4%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2377B8D9%22%20points%3D%22697.47%201443.63%20790.43%201443.63%20850.19%201383.87%20803.74%201337.36%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23A0DEEA%22%20points%3D%22964.46%201176.63%20903.31%201237.78%20949.78%201284.27%201010.92%201223.13%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%235DB5D6%22%20points%3D%22964.46%201176.63%20903.31%201237.78%20949.78%201284.27%201010.92%201223.13%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%2396C7DF%22%20transform%3D%22translate%281038.247297%2C%201149.275429%29%20rotate%28-44.970000%29%20translate%28-1038.247297%2C%20-1149.275429%29%20%22%20x%3D%22966.752297%22%20y%3D%221116.41043%22%20width%3D%22142.99%22%20height%3D%2265.73%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%2357A8D0%22%20transform%3D%22translate%281038.247297%2C%201149.275429%29%20rotate%28-44.970000%29%20translate%28-1038.247297%2C%20-1149.275429%29%20%22%20x%3D%22966.752297%22%20y%3D%221116.41043%22%20width%3D%22142.99%22%20height%3D%2265.73%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2396C7DF%22%20points%3D%221010.92%201223.13%201010.92%201223.13%20964.46%201176.63%20964.46%201176.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23000000%22%20opacity%3D%220.42%22%20points%3D%221010.92%201223.13%201010.92%201223.13%20964.46%201176.63%20964.46%201176.63%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23007CBB%22%20opacity%3D%220.4%22%20style%3D%22mix-blend-mode%3A%20multiply%3B%22%20points%3D%221336.87%20804.22%201264.69%20876.4%201311.12%20922.94%201383.3%20850.75%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2357A8D0%22%20points%3D%221336.87%20804.22%201264.69%20876.4%201311.12%20922.94%201383.3%20850.75%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2393D8CA%22%20opacity%3D%220.6%22%20style%3D%22mix-blend-mode%3A%20overlay%3B%22%20points%3D%221336.87%20804.22%201383.3%20850.75%201632.46%20601.59%201586.01%20555.08%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%235DB5D6%22%20points%3D%221336.87%20804.22%201383.3%20850.75%201632.46%20601.59%201586.01%20555.08%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23AFD3E6%22%20points%3D%222056%200.12%201645.49%200.12%201648.49%203.12%201944.07%203.12%201796.22%20150.99%201893.12%20247.97%202054.45%2086.64%202054.45%20179.6%201939.58%20294.47%202056%20411%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%237AB9D9%22%20points%3D%221648.49%203.12%201796.22%20150.99%201944.07%203.12%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2366AED4%22%20points%3D%222054.45%2086.64%201893.12%20247.97%201939.58%20294.47%202054.45%20179.6%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23B7CED2%22%20points%3D%221884.82%20709.78%202054.45%20879.57%202054.45%20540.15%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23AFD4E7%22%20points%3D%221489.14%20458.12%201489.14%20458.12%201371.13%20339.99%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23AFD4E7%22%20points%3D%221796.22%20150.99%201648.49%203.12%201425.1%203.12%201301.91%20126.31%201561.3%20385.95%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%2391C5E0%22%20transform%3D%22translate%281798.954066%2C%20388.798781%29%20rotate%28-44.970000%29%20translate%28-1798.954066%2C%20-388.798781%29%20%22%20x%3D%221632.82407%22%20y%3D%22355.933781%22%20width%3D%22332.26%22%20height%3D%2265.73%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2391C5E0%22%20points%3D%221586.01%20555.08%201632.46%20601.59%201632.46%20601.59%201586.01%20555.08%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%23B3EAEE%22%20transform%3D%22translate%281573.711577%2C%20470.620263%29%20rotate%28-45.000000%29%20translate%28-1573.711577%2C%20-470.620263%29%20%22%20x%3D%221522.68158%22%20y%3D%22402.085263%22%20width%3D%22102.06%22%20height%3D%22137.07%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%23B3EAEE%22%20transform%3D%22translate%281758.676758%2C%20655.767120%29%20rotate%28-44.970000%29%20translate%28-1758.676758%2C%20-655.767120%29%20%22%20x%3D%221707.64676%22%20y%3D%22528.29212%22%20width%3D%22102.06%22%20height%3D%22254.95%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%23B3EAEE%22%20points%3D%221301.91%20126.31%201178.84%203.12%201034.59%203.12%201229.75%20198.47%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20fill%3D%22%2383C0C8%22%20points%3D%221812.65%20781.95%202054.45%201023.99%202054.45%20879.57%201884.82%20709.78%22%3E%3C%2Fpolygon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%237DC6DC%22%20transform%3D%22translate%281395.516901%2C%20292.206519%29%20rotate%28-45.000000%29%20translate%28-1395.516901%2C%20-292.206519%29%20%22%20x%3D%221344.4919%22%20y%3D%22108.701519%22%20width%3D%22102.05%22%20height%3D%22367.01%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22%2368B8D5%22%20transform%3D%22translate%281645.313619%2C%20542.249760%29%20rotate%28-45.000000%29%20translate%28-1645.313619%2C%20-542.249760%29%20%22%20x%3D%221594.28362%22%20y%3D%22509.38476%22%20width%3D%22102.06%22%20height%3D%2265.73%22%3E%3C%2Frect%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%203.000000%29%22%20stroke%3D%22%23000000%22%20opacity%3D%220.15%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0.95%2C0.12%20L0.95%2C840.12%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0D%0A%20%20%20%20%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E')] bg-cover bg-no-repeat"
      style={{
        backgroundPosition: '25.2rem 0',
      }}
    >
      <div className="relative flex min-h-screen w-96 flex-col justify-center bg-[#fafafa] py-5 px-12 dark:bg-[#1b2b32]">
        <h1 className="mb-8 text-center text-4xl leading-7 dark:text-gray-100">
          {l10n('common.product')}
        </h1>
        {/* <h2 className="text-xl">{l10n('login.subtitle')}</h2> */}
        <form className="flex flex-col pt-10" onSubmit={submit}>
          <CdsFormGroup layout="vertical">
            <CdsInput layout="vertical">
              <label className="sr-only">{l10n('auth.username')}</label>
              <input
                placeholder={l10n('auth.username')}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* '@cds/react/forms': <CdsControlMessage status='error'>error message</CdsControlMessage> */}
            </CdsInput>
            <CdsInput layout="vertical">
              <label className="sr-only">{l10n('auth.password')}</label>
              <input
                placeholder={l10n('auth.password')}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CdsInput>
          </CdsFormGroup>

          {error && (
            <CdsAlertGroup
              status="danger"
              className="mt-6"
              aria-label="This is an example info alert group"
            >
              <CdsAlert closable={true} onCloseChange={() => signOut()}>
                {error.message}
              </CdsAlert>
            </CdsAlertGroup>
          )}

          <CdsButton
            className="mt-6"
            disabled={status === 'loading' || formInvalid}
            loadingState={status === 'loading' ? 'loading' : 'default'}
            type="submit"
          >
            {l10n('auth.login')}
          </CdsButton>
        </form>
      </div>
    </div>
  );
}
