<script lang="ts">
	import { cn } from '$lib/utils/common';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>>;

	let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-card text-card-foreground rounded-lg border shadow-sm', className)}
	{...restProps}
>
	{@render children?.()}
</div>
