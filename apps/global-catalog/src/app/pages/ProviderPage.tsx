import { PageContainer } from '@vmware/shared-ui';
import { useGetTenants } from '@vmware/services';

export default function ProviderPage() {
  const tenantQuery = useGetTenants({ offset: 0, limit: 10 });

  return (
    <PageContainer title="Provider">
      ProviderPage
      <h2 className="my-10 text-xl">Tenant Name List</h2>
      <ul>
        {tenantQuery.isSuccess &&
          tenantQuery.data.items.map((t) => <li key={t.id}>{t.name}</li>)}
      </ul>
    </PageContainer>
  );
}
