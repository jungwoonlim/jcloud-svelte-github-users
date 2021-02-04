<script lang="ts">
    type User = {
        login: string;
        avatar_url: string;
        showDetails: boolean;
    };


    async function getUsers(): Promise<User[]> {
      const res = await fetch('https://api.github.com/users');
      const users = await res.json();
      if (res.ok) {
        return users;
      } else {
        throw new Error(users);
      }
    }
    $: allUsersPromise = getUsers();
</script>

<section class="w-1/2 m-auto border border-gray-400 p-8 rounded">
    {#await allUsersPromise then users}
      {#each users as user}
        <div class="m-4 cursor-pointer">
          <div class="flex">
            <img class="rounded-full w-12" src={user.avatar_url} alt="avatar" />
            <p class="my-auto font-semibold ml-2">{user.login}</p>
          </div>
        </div>
      {/each}
    {/await}
</section>
  