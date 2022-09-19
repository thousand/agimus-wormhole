<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>
  

<ul>
  {#each data.tags as tag}
    <li data-id={tag.id}>
      {tag.tn}
    </li>
  {/each}
</ul>

<ul>
  {#each data.badges as badge}
    <li>
      {badge}
    </li>
  {/each}
</ul>