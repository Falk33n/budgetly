<script lang="ts">
	import { cn } from '$lib/utils/common';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLParagraphElement>>;

	let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<p
	bind:this={ref}
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
>
	{@render children?.()}
</p>
