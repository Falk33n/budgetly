<script lang="ts">
	import { cn } from '$lib/utils/common';
	import CheckIcon from '@lucide/svelte/icons/check';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';

	type Props = WithoutChildrenOrChild<CheckboxPrimitive.RootProps>;

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...restProps
	}: Props = $props();

	const Icon = $derived(indeterminate ? MinusIcon : CheckIcon);
</script>

<CheckboxPrimitive.Root
	bind:ref
	class={cn(
		'border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content size-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
		className,
	)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<div class="flex size-4 items-center justify-center text-current">
			<Icon class={cn('size-3.5', !indeterminate && !checked && 'text-transparent')} />
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
